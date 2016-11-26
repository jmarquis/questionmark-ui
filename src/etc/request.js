import "whatwg-fetch"

import server from "../config/server"

export default function request(path, options) {
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
      return new Promise(resolve => {
        response.json().then(json => {
          resolve(json)
        }).catch(() => {
          resolve(response)
        })
      })
    }).then(response => {
      resolve(response)
    }).catch(error => {
      if (error.message === "403") {
      }
      reject(error.message)
    })
  })
}

export function get(path, options) {
  return request(path, {
    ...options,
    method: "GET"
  })
}

export function post(path, options) {
  return request(path, {
    ...options,
    method: "POST"
  })
}

export function put(path, options) {
  return request(path, {
    ...options,
    method: "PUT"
  })
}

export function destroy(path, options) {
  return request(path, {
    ...options,
    method: "DELETE"
  })
}

export function create(path, options) {
  return request(path, {
    ...options,
    method: "CREATE"
  })
}
