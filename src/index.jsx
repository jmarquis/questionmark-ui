import "base.less"

import React from "react"
import { render } from "react-dom"
import { AppContainer } from "react-hot-loader"

import Root from "Root"

import store from "./etc/store"

const rootEl = document.getElementById("root")

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept("./components/Root", () => {
    const HotRoot = require("./components/Root").default
    render(
      <AppContainer>
        <HotRoot store={store} />
      </AppContainer>,
      rootEl
    )
  })
}
