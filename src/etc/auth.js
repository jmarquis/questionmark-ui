import request, { requestRaw } from "./api"

export function authenticate({ email, password }) {
  return new Promise((resolve, reject) => {
    request("sessions", {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(() => {
        resolve()
      })
      .catch(reject)
  })
}

export function isAuthenticated() {
  return new Promise((resolve, reject) => {
    requestRaw("sessions").then(() => {
      resolve()
    }).catch((error) => {
      alert(error)
      reject()
    })
  })
}

export function resetAuthentication() {
  return new Promise((resolve, reject) => {
    requestRaw("sessions", {
      method: "DELETE"
    }).then(() => {
      resolve()
    }).catch(error => {
      alert(error)
      reject()
    })
  })
}
