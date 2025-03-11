"use client"

import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useCreateWorkspace } from "../api/use-create-workspace"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const CreateWorkspaceModal = () => {
  const router = useRouter()
  const [open, setOpen] = useCreateWorkspaceModal()
  const [name, setName] = useState("")

  const {
    mutate,
    isPending,
  } = useCreateWorkspace()

  const handleClose = () => {
    setOpen(false)
    setName("")
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await mutate({
      name: "Workspace 1"
    }, {
      onSuccess(data) {
        router.push(`/workspace/${data}`)
        handleClose()
        toast.success("Workspace created")
      },
      onError(error) {
        console.log(error)
        // Show toast error
      },
      onSettled: () => {
        // Reset form
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a workspace</DialogTitle>
        </DialogHeader>
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isPending}
            required
            autoFocus
            minLength={3}
            placeholder="Workspace name e.g. 'Work', 'Personal', 'Home'"
          />
          <div className="flex justify-end">
            <Button
              disabled={isPending}
            >
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}