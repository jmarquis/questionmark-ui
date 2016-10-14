export function session(state = null, action) {

  switch (action.type) {

    case "UPDATE_SESSION":
      return action.user

    default:
      return state

  }

}
