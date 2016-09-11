import fetchJson from "../etc/fetchJson"

function updateLists({ lists, projectId }) {
  return {
    type: "UPDATE_LISTS",
    projectId,
    lists
  }
}

export function fetchLists(projectId) {
  return dispatch => {
    fetchJson(`projects/${projectId}/lists`).then(lists => {
      dispatch(updateLists({ lists, projectId }))
    })
  }
}
