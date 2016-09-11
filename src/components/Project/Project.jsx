import "./Project.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import { fetchLists } from "actions/lists"

import List from "List"

@connect((state, ownProps) => {
  const { dispatch, lists } = state
  const { projectId } = ownProps.routeParams
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

  componentWillUpdate(nextProps) {
    if (this.props.projectId !== nextProps.projectId) {
      const { dispatch, projectId } = nextProps
      dispatch(fetchLists(projectId))
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

}
