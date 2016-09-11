import React, { Component, PropTypes } from "react"
import { Provider } from "react-redux"
import { Router, Route } from "react-router"

import App from "App"
import Project from "Project"

export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object,
    history: PropTypes.object
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history}>
          <Route path="/" component={App}>
            <Route path="projects">
              <Route path=":projectId" component={Project} />
            </Route>
          </Route>
        </Router>
      </Provider>
    )
  }

}
