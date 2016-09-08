import "whatwg-fetch"

import { api } from "config"

function updateLists(lists) {
  return {
    type: "UPDATE_LISTS",
    lists
  }
}

export function fetchLists(projectId) {
  return dispatch => {
    fetch(`${api.host}/projects/${projectId}/lists`).then(response => {
      return response.json()
    }).then(lists => {
      dispatch(updateLists(lists))
    })
  }
}
