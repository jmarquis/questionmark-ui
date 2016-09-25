import request from "../etc/api"

function updateProjects(projects) {
  return (dispatch, getState) => {
    dispatch({
      type: "UPDATE_PROJECTS",
      projects
    })
  }
}

export function fetchProjects() {
  return dispatch => {
    request("projects").then(projects => {
      dispatch(updateProjects(projects))
    })
  }
}
