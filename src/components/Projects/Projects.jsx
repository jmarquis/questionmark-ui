import React, { Component, PropTypes } from "react"
import { Match } from "react-router"
import { connect } from "react-redux"

import { deauthenticate } from "../../actions/session"

import Project from "Project"

@connect(state => {
  const { dispatch } = state
  return {
    dispatch
  }
})
export default class Projects extends Component {

  static propTypes = {
    dispatch: PropTypes.func
  }

  componentDidMount() {
    const { dispatch } = this.props
    setTimeout(() => {
      dispatch(deauthenticate())
    }, 3000)
  }

  render() {
    return (
      <div className="Projects">
        <Match pattern="/projects/:projectId" component={Project} />
      </div>
    )
  }

}
