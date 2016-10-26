export function cards(state = {}, action) {

  switch(action.type) {

    case "UPDATE_CARDS":
      return {
        ...state,
        ...action.cards
      }

    default:
      return state

  }

}
