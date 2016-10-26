import "./Project.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import { fetchProject } from "actions/projects"

import List from "List"

@connect((state, ownProps) => {

  const { projectId } = ownProps.params

  const {
    dispatch,
    lists,
    projects: { [projectId]: project }
  } = state

  return {
    dispatch,
    projectId,
    project,
    lists: project ? project.list_ids.map(listId => lists[listId]) : []
  }

})
export default class Project extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    projectId: PropTypes.string,
    project: PropTypes.object,
    lists: PropTypes.array
  }

  componentDidMount() {
    const { dispatch, projectId } = this.props
    dispatch(fetchProject(projectId))
  }

  render() {
    const { project, lists } = this.props
    if (!project) return null
    return (
      <div className="Project">
        {
          lists.map(list => {
            if (!list) return null
            return (
              <List
                key={list.id}
                id={list.id}
                title={list.title}
                cards={list.cards}
              />
            )
          })
        }
      </div>
    )
  }

}
