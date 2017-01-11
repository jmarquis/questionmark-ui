import { put, destroy } from "request"
import store from "store"

export function moveCard(cardId, listId, position) {
  return dispatch => {
    // put(`cards/${cardId}`, {
    //   body: JSON.stringify({
    //     list_id: listId,
    //     position
    //   })
    // }).then(card => {

    dispatch({
      type: "DEEP_UPDATE_CARDS",
      cards: {
        [cardId]: {
          list_id: listId,
          position: position - 0.5
        }
      }
    })

    const lists = store.getState().lists
    const allCards = store.getState().cards

    dispatch({
      type: "DEEP_UPDATE_CARDS",
      cards: {
        ...(lists[listId].card_ids.sort((cardA, cardB) => {
          return allCards[cardA].position - allCards[cardB].position
        }).reduce((cards, cardId, index) => {
          cards[cardId] = { position: index }
          return cards
        }, {}))
      }
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
