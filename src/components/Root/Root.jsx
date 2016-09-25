import React, { Component, PropTypes } from "react"
import { Provider } from "react-redux"
import { Match } from "react-router"

import Router from "Router"
import App from "App"

export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object,
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Match pattern="/" component={App} />
        </Router>
      </Provider>
    )
  }

}
