import "base"

import { AppContainer } from "react-hot-loader"
import React from "react"
import { render } from "react-dom"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import createLogger from "redux-logger"

import Root from "Root"
import * as reducers from "./reducers"

const store = createStore(
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

const rootEl = document.getElementById("root")

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept("./components/Root", () => {
    const HotRoot = require("Root").default
    render(
      <AppContainer>
        <HotRoot store={store} />
      </AppContainer>,
      rootEl
    )
  })
}
