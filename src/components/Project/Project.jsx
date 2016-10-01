import "./Project.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import { fetchLists } from "actions/lists"

import List from "List"

@connect((state, ownProps) => {
  const { dispatch, lists } = state
  const { projectId } = ownProps.params
  return {
    dispatch,
    lists,
    projectId
  }
})
export default class Project extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    lists: PropTypes.object,
    projectId: PropTypes.string
  }

  componentDidMount() {
    console.log("mount", this.props.projectId)
    this.loadProject(this.props.projectId)
  }

  componentWillUpdate(nextProps) {
    console.log("update", nextProps.projectId)
    if (this.props.projectId !== nextProps.projectId) {
      this.loadProject(nextProps.projectId)
    }
  }

  render() {
    const { projectId } = this.props
    if (!this.props.lists[projectId]) return null
    return (
      <div className="Project">
        {
          this.props.lists[projectId].map(list => {
            return <List key={list.id} title={list.title} cards={list.cards} />
          })
        }
      </div>
    )
  }

  loadProject = projectId => {
    const { dispatch } = this.props
    dispatch(fetchLists(projectId))
  }

}
