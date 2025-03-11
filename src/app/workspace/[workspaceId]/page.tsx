interface WorkspaceIdPageProps {
  params: {
    workspaceId: string,
  }
}

const WorkspaceIdPage = ({ params }: WorkspaceIdPageProps) => {
  return (
    <div>
      workspaceId: {params.workspaceId}
    </div>
  )
}

export default WorkspaceIdPage