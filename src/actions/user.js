import { get, post, destroy } from "../etc/request"

function updateUser(user) {
  return {
    type: "UPDATE_USER",
    user
  }
}

export function fetchUser() {
  return dispatch => {
    get("sessions").then(user => {
      dispatch(updateUser(user))
    }).catch(error => {
      dispatch(updateUser(false))
    })
  }
}

export function authenticate({ email, password }) {
  return dispatch => {
    dispatch(updateUser(null))
    setTimeout(() => {
      post("sessions", {
        body: JSON.stringify({
          email,
          password
        })
      }).then(user => {
        dispatch(updateUser(user))
      }).catch(error => {
        dispatch(updateUser(false))
        console.error(error)
      })
    }, 1000)
  }
}

export function endSession() {
  return dispatch => {
    dispatch(updateUser(null))
    setTimeout(() => {
      destroy("sessions").then(() => {
        dispatch(updateUser(false))
      }).catch(error => {
        console.error(error)
      })
    }, 500)
  }
}
