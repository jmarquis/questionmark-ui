import request from "../etc/request"

function updateLists(lists) {
  return {
    type: "UPDATE_LISTS",
    lists
  }
}

export function fetchLists(projectId) {
  return dispatch => {
    request(`projects/${projectId}/lists`).then(lists => {
      dispatch(updateLists(lists))
    })
  }
}

export function createCard(listId) {
  return {
    type: "CREATE_CARD",
    listId
  }
}

export function fetchList(listId) {
  return dispatch => {
    request(`lists/${listId}/cards`).then(cards => {
      dispatch({
        type: "UPDATE_CARDS",
        cards
      })
    })
  }
}
