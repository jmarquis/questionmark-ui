import "./Workspace.less"

import React, { Component, PropTypes } from "react"
import { Match } from "react-router"
import { connect } from "react-redux"

import Project from "Project"

import { fetchWorkspace } from "../../actions/workspaces"

@connect((state, ownProps) => {
  const { dispatch } = state
  const { params: { workspaceId } } = ownProps
  return {
    dispatch,
    workspaceId
  }
})
export default class Workspace extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    workspaceId: PropTypes.string
  }

  componentDidMount() {
    const { dispatch, workspaceId } = this.props
    dispatch(fetchWorkspace(workspaceId))
  }

  render() {
    return (
      <div className="Workspace">
        <Match pattern="/:workspaceId/:projectId" component={Project} />
      </div>
    )
  }

}
