import { Button } from "@/components/ui/button"
import { Id } from "../../../../convex/_generated/dataModel"

interface UserItemProps {
  id: Id<"users">
  label?: string,
  image?: string,
  variant?: string,
}

export const UserItem = ({

}: UserItemProps) => {
  return (
    <Button>

    </Button>
  )
}