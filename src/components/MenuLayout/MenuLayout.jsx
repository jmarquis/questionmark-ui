import "./MenuLayout.less"

import React, { Component, PropTypes } from "react"

import { Match } from "react-router"

import Menu from "Menu"
import Workspace from "Workspace"

export default class MenuLayout extends Component {

  static contextTypes = {
    router: PropTypes.object,
    history: PropTypes.object
  }

  componentDidMount() {
    const { history: { location: { pathname }}, router: { transitionTo } } = this.context
    if (pathname === "/") {
      transitionTo("/1")
    }
  }

  render() {
    return (
      <div className="MenuLayout">
        <Menu />
        <Match pattern="/:workspaceId" component={Workspace} />
      </div>
    )
  }

}
