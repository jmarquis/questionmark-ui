import "whatwg-fetch"

import server from "../config/server"
import { goto } from "../etc/nav"

export function requestRaw(path, options) {
  return new Promise((resolve, reject) => {
    fetch(`${server.host}/${path}`, {
      credentials: "include",
      mode: "cors",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      ...options
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        throw new Error(response.status)
      }
    }).then(response => {
      resolve(response)
    }).catch(error => {
      if (error.message === "403") {
        goto("/")
      }
      reject(error.message)
    })
  })
}

export default function request(path, options) {
  return new Promise((resolve, reject) => {
    requestRaw(path, options).then(response => {
      return response.json()
    }).then(resolve).catch(reject)
  })
}
