import "base"

import { AppContainer } from "react-hot-loader"
import React from "react"
import { render } from "react-dom"
import { browserHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import Root from "Root"

import store from "./etc/store"

const history = syncHistoryWithStore(browserHistory, store)

const rootEl = document.getElementById("root")

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept("./components/Root", () => {
    const HotRoot = require("Root").default
    render(
      <AppContainer>
        <HotRoot store={store} history={history} />
      </AppContainer>,
      rootEl
    )
  })
}
