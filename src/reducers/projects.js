export function projects(state = [], action) {

  switch (action.type) {

    case "UPDATE_PROJECTS":
      return action.projects

    default:
      return state

  }

}
