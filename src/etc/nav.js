import { push } from "react-router-redux"

import store from "./store"

export function goto(path) {
  store.dispatch({
    type: "LOCATION_CHANGE",
    location: {
      pathname: path,
      search: "",
      hash: ""
    }
  })
}
