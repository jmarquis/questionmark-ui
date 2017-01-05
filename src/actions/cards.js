import { put, destroy } from "../etc/request"

export function moveCard(cardId, listId) {
  return dispatch => {
    put(`cards/${cardId}`, {
      body: JSON.stringify({
        list_id: listId
      })
    }).then(card => {
      dispatch({
        type: "UPDATE_CARDS",
        cards: {
          [card.id]: card
        }
      })
    })
  }
}

export function deleteCard(cardId) {
  return dispatch => {
    destroy(`cards/${cardId}`).then(() => {
      dispatch({
        type: "DELETE_CARD",
        cardId
      })
    })
  }
}
