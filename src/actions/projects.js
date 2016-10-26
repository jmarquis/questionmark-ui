import request from "../etc/request"

function updateProjects(projects) {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_PROJECTS",
      projects
    })
  }
}

export function fetchProjects(workspaceId) {
  return dispatch => {
    request(`workspaces/${workspaceId}`).then(projects => {
      dispatch(updateProjects(projects))
    })
  }
}

export function fetchProject(projectId) {
  return dispatch => {
    request(`projects/${projectId}/lists`).then(lists => {
      dispatch({
        type: "UPDATE_LISTS",
        lists
      })
    })
  }
}
