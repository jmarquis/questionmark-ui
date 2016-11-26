import "./Workspace.less"

import React, { Component, PropTypes } from "react"
import { Match } from "react-router"
import { connect } from "react-redux"

import Project from "Project"

import { fetchWorkspace } from "../../actions/workspaces"

@connect((state, ownProps) => {
  const { dispatch } = state
  const { params: { workspaceId, projectId } } = ownProps
  return {
    dispatch,
    workspaceId
  }
})
export default class Workspace extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    workspaceId: PropTypes.string,
    projectId: PropTypes.string
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    const { dispatch, workspaceId, projectId } = this.props

    setTimeout(() => {
      dispatch(fetchWorkspace(workspaceId))

      const { router: { transitionTo } } = this.context
      if (!projectId) {
        transitionTo(`/${workspaceId}/1`)
      }
    }, 300);
  }

  render() {
    return (
      <div className="Workspace">
        <Match pattern="/:workspaceId/:projectId" component={Project} />
      </div>
    )
  }

}
