import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import createLogger from "redux-logger"
import { routerReducer, routerMiddleware } from "react-router-redux"

import * as reducers from "../reducers"

export default function configureStore(history) {

  return createStore(

    combineReducers({
      ...reducers,
      routing: routerReducer
    }),

    applyMiddleware(
      thunk,
      routerMiddleware(history),
      createLogger({
        level: "info",
        collapsed: true,
        diff: true
      })
    )

  )

}
