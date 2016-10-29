import { get, post } from "../etc/request"

function updateLists(lists) {
  return {
    type: "UPDATE_LISTS",
    lists
  }
}

export function fetchLists(projectId) {
  return dispatch => {
    get(`projects/${projectId}/lists`).then(lists => {
      dispatch(updateLists(lists))
    })
  }
}

export function fetchList(listId) {
  return dispatch => {
    get(`lists/${listId}/cards`).then(cards => {
      dispatch({
        type: "UPDATE_CARDS",
        cards
      })
    })
  }
}

export function createCard(listId, title) {
  return dispatch => {
    post(`lists/${listId}/cards`, {
      body: JSON.stringify({
        list_id: listId,
        title
      })
    }).then(card => {
      dispatch({
        type: "CREATE_CARD",
        listId,
        card
      })
    })
  }
}
