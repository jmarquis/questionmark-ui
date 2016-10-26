export function lists(state = {}, action) {

  switch (action.type) {

    case "UPDATE_LISTS":
      return {
        ...state,
        ...action.lists
      }

    case "CREATE_CARD":
      return {
        ...state
      }

    default:
      return state

  }

}
