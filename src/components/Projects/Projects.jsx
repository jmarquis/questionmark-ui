import React, { Component, PropTypes } from "react"
import { Match } from "react-router"

import Menu from "Menu"
import Project from "Project"

export default class Projects extends Component {

  render() {
    return (
      <div className="Projects">
        <Match pattern="/:projectId" component={Project} />
      </div>
    )
  }

}
