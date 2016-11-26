import "./Menu.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { Match } from "react-router"

import { endSession } from "actions/user"

import ProjectList from "ProjectList"

@connect(state => {
  const { location } = state
  return {
    location
  }
})
export default class Menu extends Component {

  static propTypes = {
    location: PropTypes.object,
    user: PropTypes.any,
    dispatch: PropTypes.func
  }

  render() {
    return (
      <div className="Menu">

        <header>
          Personal
        </header>

        <Match pattern="/:workspaceId" component={ProjectList} />

        <footer>
          <figure></figure>
          <a onClick={this.handleSignoutClick}>Jeremy Marquis</a>
        </footer>

      </div>
    )
  }

  handleSignoutClick = () => {
    const { dispatch } = this.props
    dispatch(endSession())
  }

}
