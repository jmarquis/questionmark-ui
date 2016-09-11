import { push } from "react-router-redux"

import store from "./store"

export function goto(path) {
  store.dispatch(push(path))
}
