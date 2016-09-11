import "whatwg-fetch"

import api from "../config/api"
import { goto } from "../etc/nav"

export default function fetchJson(path, ...args) {
  return new Promise((resolve, reject) => {
    fetch(`${api.host}/${path}`, {
      credentials: "include",
      ...args
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        throw new Error(response.status)
      }
    }).then(response => {
      return response.json()
    }).then(json => {
      resolve(json)
    }).catch(error => {
      if (error.message === "403") {
        goto("/")
      }
      reject(error.message)
    })
  })
}
