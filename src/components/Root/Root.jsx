import React, { Component, PropTypes } from "react"
import { Provider } from "react-redux"
import { Router } from "react-router"

import routes from "../../config/routes"

export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object,
    history: PropTypes.object
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history}>
          {routes}
        </Router>
      </Provider>
    )
  }

}
