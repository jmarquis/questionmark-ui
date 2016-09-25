import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import createLogger from "redux-logger"

import * as reducers from "../reducers"

class Store {

  constructor() {
    this.store = createStore(

      combineReducers(reducers),

      applyMiddleware(
        thunk,
        createLogger({
          level: "info",
          collapsed: true,
          diff: true
        })
      )
    )
  }

  getStore() {
    return this.store
  }

}

export default new Store().getStore()
