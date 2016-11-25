import "./MenuLayout.less"

import React, { Component } from "react"

import { Match } from "react-router"

import Menu from "Menu"
import Workspace from "Workspace"

export default class MenuLayout extends Component {

  render() {
    return (
      <div className="MenuLayout">
        <Menu />
        <Match pattern="/:workspaceId" component={Workspace} />
      </div>
    )
  }

}
