import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog"
import { useState } from "react"

interface PreferencesModalProps {
  open: boolean
  setOpen: (open: boolean) => void
  initalValue: string,
}

export const PreferencesModal = ({
  open,
  setOpen,
  initalValue,
}: PreferencesModalProps) => {

  const [value, setValue] = useState(initalValue)

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {value}
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}