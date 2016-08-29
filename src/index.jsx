import "./base.less";

import { AppContainer } from "react-hot-loader";
import React from "react";
import { render } from "react-dom";

import App from "App";

const rootEl = document.getElementById("root")

render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const HotApp = require("App").default;
    render(
      <AppContainer>
        <HotApp />
      </AppContainer>,
      rootEl
    );
  })
}
