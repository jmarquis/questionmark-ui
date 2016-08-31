export function lists(state = [], action) {

  switch (action.type) {

    case "UPDATE_LISTS":
      return action.lists

    default:
      return state

  }

}
