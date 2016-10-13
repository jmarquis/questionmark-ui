import request from "../etc/request"

function updateLists({ lists, projectId }) {
  return {
    type: "UPDATE_LISTS",
    projectId,
    lists
  }
}

export function fetchLists(projectId) {
  return dispatch => {
    request(`projects/${projectId}/lists`).then(lists => {
      dispatch(updateLists({ lists, projectId }))
    })
  }
}
