import "./MenuLayout.less"

import React, { Component } from "react"

import { Match } from "react-router"

import Menu from "Menu"
import Workspace from "Workspace"
import SignOut from "SignOut"

export default class MenuLayout extends Component {

  render() {
    return (
      <div className="MenuLayout">
        <Menu />
        <Match pattern="/signout" component={SignOut} />
        <Match pattern="/:workspaceId" component={Workspace} />
      </div>
    )
  }

}
