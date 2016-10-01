import "./Menu.less"

import React, { Component } from "react"
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

  render() {
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
