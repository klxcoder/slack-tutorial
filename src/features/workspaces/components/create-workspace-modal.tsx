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
import { FormEvent } from "react"

export const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal()

  const { mutate } = useCreateWorkspace()

  const handleClose = () => {
    setOpen(false)
    // TODO: Clear form
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await mutate({
      name: "Workspace 1"
    }, {
      onSuccess(data) {
        console.log(data)
        // Redirect to the workspace id
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
            value={""}
            disabled={false}
            required
            autoFocus
            minLength={3}
            placeholder="Workspace name e.g. 'Work', 'Personal', 'Home'"
          />
          <div className="flex justify-end">
            <Button
              disabled={false}
            >
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}