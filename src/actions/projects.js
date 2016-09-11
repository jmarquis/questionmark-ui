import { goto } from "../etc/nav"
import fetchJson from "../etc/fetchJson"

function updateProjects(projects) {
  return (dispatch, getState) => {
    dispatch({
      type: "UPDATE_PROJECTS",
      projects
    })
    if (getState().routing.locationBeforeTransitions.pathname === "/") {
      goto(`/projects/${projects[0].id}`)
    }
  }
}

export function fetchProjects() {
  return dispatch => {
    fetchJson("projects").then(projects => {
      dispatch(updateProjects(projects))
    })
  }
}
