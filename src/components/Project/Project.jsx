import "./Project.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import { fetchLists } from "actions/lists"

import List from "List"

@connect(state => {
  const { dispatch, lists } = state
  return {
    dispatch,
    lists
  }
})
export default class Project extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    lists: PropTypes.array,
    routeParams: PropTypes.object
  }

  componentDidMount() {
    const { dispatch, routeParams } = this.props
    dispatch(fetchLists(routeParams.projectId))
  }

  render() {
    return (
      <div className="Project">
        {
          this.props.lists.map(list => {
            return <List key={list.id} title={list.title} cards={list.cards} />
          })
        }
      </div>
    )
  }

}
