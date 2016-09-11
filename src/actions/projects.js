import "whatwg-fetch"
import { push } from "react-router-redux"

import { api } from "config"

function updateProjects(projects) {
  return (dispatch, getState) => {
    dispatch({
      type: "UPDATE_PROJECTS",
      projects
    })
    if (getState().routing.locationBeforeTransitions.pathname === "/") {
      dispatch(push(`/projects/${projects[0].id}`))
    }
  }
}

export function fetchProjects() {
  return dispatch => {
    fetch(`${api.host}/projects`).then(response => {
      return response.json()
    }).then(projects => {
      dispatch(updateProjects(projects))
    })
  }
}
