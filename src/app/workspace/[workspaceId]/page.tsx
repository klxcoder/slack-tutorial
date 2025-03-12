"use client"

import { useWorkspaceId } from "@/hooks/use-workspace-id"
// import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace"

const WorkspaceIdPage = () => {
  const workspaceId = useWorkspaceId()
  // const { data } = useGetWorkspace({ id: workspaceId })

  return (
    <div>
      {/* Data: {JSON.stringify(data)} */}
      workspaceId {workspaceId}
    </div>
  )
}

export default WorkspaceIdPage