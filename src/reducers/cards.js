export function cards(state = {}, action) {

  switch (action.type) {

    case "UPDATE_CARDS":
      return {
        ...state,
        ...action.cards
      }

    case "DEEP_UPDATE_CARDS": {
      const updatedCards = {}
      for (const cardId in action.cards) {
        if (action.cards.hasOwnProperty(cardId)) {
          updatedCards[cardId] = {
            ...state[cardId],
            ...action.cards[cardId]
          }
        }
      }
      return {
        ...state,
        ...updatedCards
      }
    }

    case "CREATE_CARD":
      return {
        ...state,
        [action.card.id]: action.card
      }

    case "DELETE_CARD": {
      const newState = { ...state }
      delete newState[action.cardId]
      return newState
    }

    default:
      return state

  }

}
