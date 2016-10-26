import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import NavLink from "NavLink"

@connect((state, ownProps) => {

  const { params: { workspaceId } } = ownProps
  const { projects, workspaces: { [workspaceId]: workspace } } = state

  return {
    projects: workspace ? workspace.project_ids.map(projectId => projects[projectId]) : [],
    workspace
  }

})
export default class ProjectList extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    workspace: PropTypes.object,
    projects: PropTypes.array,
  }

  render() {
    const { workspace, projects } = this.props
    return (
      <ul className="ProjectList">
        {
          projects.map(project => {
            if (!project) return null
            return (
              <li key={project.id}>
                <NavLink to={`/${workspace.id}/${project.id}`}>{project.name}</NavLink>
              </li>
            )
          })
        }
      </ul>
    )
  }

}
