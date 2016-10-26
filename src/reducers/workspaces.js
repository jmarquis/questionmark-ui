export function workspaces(state = {}, action) {

  switch (action.type) {

    case "UPDATE_WORKSPACES":
      return action.workspaces

    case "UPDATE_WORKSPACE":
      return {
        ...state,
        [action.workspace.id]: action.workspace
      }

    default:
      return state

  }

}
