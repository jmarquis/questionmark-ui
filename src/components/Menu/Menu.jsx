import "./Menu.less"

import React, { Component, PropTypes } from "react"

import NavLink from "NavLink"

export default class Menu extends Component {

  render() {
    return (
      <div className="Menu">

        <header>
          My Junk
        </header>

        <ul>
          <li><NavLink to="/projects/2">Work Stuff</NavLink></li>
          <li><NavLink to="/projects/1">Finances</NavLink></li>
          <li><NavLink to="/projects/3">Blog post ideas to write about in the future</NavLink></li>
          <li><NavLink to="/projects/4">Gift ideas</NavLink></li>
        </ul>

        <footer>
          <figure></figure>
          Jeremy Marquis
        </footer>

      </div>
    )
  }

}
