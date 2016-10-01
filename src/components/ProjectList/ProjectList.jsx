import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import NavLink from "NavLink"

import { fetchProjects } from "../../actions/projects"

@connect(state => {
  const { projects } = state
  return {
    projects
  }
})
export default class ProjectList extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    projects: PropTypes.array
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchProjects())
  }

  render() {
    return (
      <ul className="ProjectList">
        {
          this.props.projects.map(project => {
            return (
              <li key={project.id}>
                <NavLink to={`/projects/${project.id}`}>{project.name}</NavLink>
              </li>
            )
          })
        }
      </ul>
    )
  }

}
