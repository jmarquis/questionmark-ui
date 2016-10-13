import "whatwg-fetch"

import { get } from "../etc/api"

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
