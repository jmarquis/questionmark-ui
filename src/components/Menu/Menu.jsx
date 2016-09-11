import "./Menu.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import { fetchProjects } from "../../actions/projects"

import NavLink from "NavLink"

@connect(state => {
  const { dispatch, projects, routing } = state
  return {
    dispatch,
    projects,
    routing
  }
})
export default class Menu extends Component {

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
      <div className="Menu">

        <header>
          My Junk
        </header>

        <ul>
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

        <footer>
          <figure></figure>
          Jeremy Marquis
        </footer>

      </div>
    )
  }

}
