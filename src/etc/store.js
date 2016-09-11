import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import createLogger from "redux-logger"
import { browserHistory } from "react-router"
import { routerReducer, routerMiddleware } from "react-router-redux"

import * as reducers from "../reducers"

class Store {

  constructor() {
    this.store = createStore(

      combineReducers({
        ...reducers,
        routing: routerReducer
      }),

      applyMiddleware(
        thunk,
        routerMiddleware(browserHistory),
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
