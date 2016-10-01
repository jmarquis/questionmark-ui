import "./App.less"

import React, { Component, PropTypes } from "react"
import { Match } from "react-router"

import Menu from "Menu"
import Authentication from "Authentication"
import Projects from "Projects"

export default class App extends Component {

  static propTypes = {
    children: PropTypes.object,
    location: PropTypes.object
  }

  render() {
    return (
      <main id="App">
        <Menu />
        <Match exactly pattern="" component={Authentication} />
        <Match pattern="/projects" component={Projects} />
      </main>
    )
  }

}
