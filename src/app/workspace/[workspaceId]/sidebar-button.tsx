import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

interface SidebarButtonProps {
  icon: LucideIcon | IconType
  label: string
  isActive?: boolean,
}

export const SidebarButton = ({
  // icon,
  // label,
  // isActive,
}: SidebarButtonProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-0.5 cursor-pointer group">
      <Button>
      </Button>
    </div>
  )
}