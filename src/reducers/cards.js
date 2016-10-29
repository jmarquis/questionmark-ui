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

    default:
      return state

  }

}
