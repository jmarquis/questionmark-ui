export function cards(state = {}, action) {

  switch (action.type) {

    case "UPDATE_CARDS":
      return {
        ...state,
        ...action.cards
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
