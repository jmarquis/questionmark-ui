export function projects(state = {}, action) {

  switch (action.type) {

    case "UPDATE_PROJECTS":
      return {
        ...state,
        ...action.projects
      }

    default:
      return state

  }

}
