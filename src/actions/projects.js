import request from "../etc/request"

function updateProjects(projects) {
  return (dispatch) => {
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
