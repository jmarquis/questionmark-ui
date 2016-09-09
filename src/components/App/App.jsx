import "./App.less"

import React, { Component, PropTypes } from "react"

import ProjectList from "ProjectList"
import Project from "Project"

export default class App extends Component {

  static propTypes = {
    children: PropTypes.object
  }

  render() {
    return (
      <div id="App">
        <header></header>
        <div>
          <ProjectList />
          {this.props.children}
        </div>
      </div>
    )
  }

}
