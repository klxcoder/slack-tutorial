import { useMutation } from "convex/react"
import { api } from "../../../../convex/_generated/api"
import { useCallback, useState } from "react"
import { Id } from "../../../../convex/_generated/dataModel"

type RequestType = {
  name: string,
}

type ResponseType = Id<"workspaces"> | null

type Options = {
  onSuccess?: (data: ResponseType) => void,
  onError?: (error: Error) => void,
  onSettled?: () => void,
  throwError?: boolean,
}

export const useCreateWorkspace = () => {
  const [isPending, setIsPending] = useState(false)
  const [data, setData] = useState<ResponseType>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSettle, setIsSettle] = useState(false)

  const mutation = useMutation(api.workspaces.create)

  const mutate = useCallback(async (values: RequestType, options: Options) => {
    try {
      setIsPending(true)
      setData(null)
      setError(null)
      setIsSuccess(false)
      setIsError(false)
      setIsSettle(false)

      const response = await mutation(values)
      options?.onSuccess?.(response)
      return response
    } catch (error) {
      options?.onError?.(error as Error)
      if (options?.throwError) {
        throw error
      }
    } finally {
      setIsPending(false)
      setIsSettle(true)
      options?.onSettled?.()
    }
  }, [mutation])

  return {
    isPending,
    data,
    error,
    isSuccess,
    isError,
    isSettle,
    mutate,
  }
}