import "./App.less"

import React, { Component } from "react"

import ProjectList from "ProjectList"
import Project from "Project"

export default class App extends Component {

  render() {
    return (
      <div id="App">
        <header></header>
        <div>
          <ProjectList />
          <Project />
        </div>
      </div>
    )
  }

}
