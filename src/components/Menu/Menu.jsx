import "./Menu.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { Match } from "react-router"

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
    user: PropTypes.any
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
          Jeremy Marquis
        </footer>

      </div>
    )
  }

}
