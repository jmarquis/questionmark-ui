import { get, post, destroy } from "../etc/request"

function updateSession(user) {
  return {
    type: "UPDATE_SESSION",
    user
  }
}

export function fetchSession() {
  return dispatch => {
    get("sessions").then(user => {
      dispatch(updateSession(user))
    }).catch(error => {
      dispatch(updateSession(false))
    })
  }
}

export function authenticate({ email, password }) {
  return dispatch => {
    post("sessions", {
      body: JSON.stringify({
        email,
        password
      })
    }).then(user => {
      dispatch(updateSession(user))
      // TODO: dispatch location update
    }).catch(error => {
      dispatch(updateSession(false))
      console.error(error)
    })
  }
}

export function deauthenticate() {
  return dispatch => {
    destroy("sessions").then(() => {
      dispatch(updateSession(false))
    }).catch(error => {
      console.error(error)
    })
  }
}
