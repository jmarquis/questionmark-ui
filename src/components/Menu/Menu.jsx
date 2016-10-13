import "./Menu.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { Match } from "react-router"

import ProjectList from "ProjectList"

@connect(state => {
  const { location, user } = state
  return {
    location,
    user
  }
})
export default class Menu extends Component {

  static propTypes = {
    location: PropTypes.object,
    user: PropTypes.object
  }

  render() {
    if (!this.props.user) return null
    return (
      <div className="Menu">

        <header>
          My Junk
        </header>

        <Match pattern="/projects" component={ProjectList} />

        <footer>
          <figure></figure>
          Jeremy Marquis
        </footer>

      </div>
    )
  }

}
