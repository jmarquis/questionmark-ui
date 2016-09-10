import "whatwg-fetch"

import { api } from "config"

function updateProjects(projects) {
  return {
    type: "UPDATE_PROJECTS",
    projects
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
