import "./App.less"

import React, { Component, PropTypes } from "react"

import Menu from "Menu"

export default class App extends Component {

  static propTypes = {
    children: PropTypes.object,
    location: PropTypes.object
  }

  render() {
    return (
      <main id="App">
        <Menu />
        {this.props.children}
      </main>
    )
  }

}
