export function lists(state = {}, action) {

  switch (action.type) {

    case "UPDATE_LISTS":
      return {
        ...state,
        [action.projectId]: action.lists
      }

    default:
      return state

  }

}
