import { get, post } from "../etc/request"

function updateUser(user) {
  return {
    type: "UPDATE_USER",
    user
  }
}

export function fetchCurrentUser() {
  return dispatch => {
    get("sessions").then(user => {
      dispatch(updateUser(user))
    }).catch(() => {
      dispatch(updateUser(false))
    })
  }
}

export function authenticate({ email, password }) {
  return dispatch => {
    post("sessions", {
      body: {
        email,
        password
      }
    }).then(user => {
      dispatch(updateUser(user))
    }).catch(error => {
      dispatch(updateUser(false))
      console.log(error)
    })
  }
}
