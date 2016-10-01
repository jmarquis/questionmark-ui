import React, { Component } from "react"
import { Match } from "react-router"

import Project from "Project"

export default class Projects extends Component {

  render() {
    return (
      <div className="Projects">
        <Match pattern="/projects/:projectId" component={Project} />
      </div>
    )
  }

}
