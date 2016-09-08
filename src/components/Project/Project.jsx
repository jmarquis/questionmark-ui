import "./Project.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import List from "List"

import { fetchLists } from "actions/lists"

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
    lists: PropTypes.array
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchLists(1))
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
