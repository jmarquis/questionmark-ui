import "whatwg-fetch"

import { api } from "config"

function updateLists({ lists, projectId }) {
  return {
    type: "UPDATE_LISTS",
    projectId,
    lists
  }
}

export function fetchLists(projectId) {
  return dispatch => {
    fetch(`${api.host}/projects/${projectId}/lists`).then(response => {
      return response.json()
    }).then(lists => {
      dispatch(updateLists({ lists, projectId }))
    })
  }
}
