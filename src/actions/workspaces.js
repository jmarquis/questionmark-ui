import request from "../etc/request"

export function fetchWorkspace(workspaceId) {
  return dispatch => {
    request(`workspaces/${workspaceId}`).then(workspace => {
      dispatch({
        type: "UPDATE_WORKSPACE",
        workspace
      })
    })
    request(`workspaces/${workspaceId}/projects`).then(projects => {
      dispatch({
        type: "UPDATE_PROJECTS",
        projects
      })
    })
  }
}
