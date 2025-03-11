"use client"

import { useParams } from "next/navigation"

const WorkspaceIdPage = () => {
  const params = useParams()

  return (
    <div>
      workspaceId: {params.workspaceId}
    </div>
  )
}

export default WorkspaceIdPage