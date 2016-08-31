import "./Project.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import List from "List"

import { updateLists } from "actions/lists"

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
    this.props.dispatch(updateLists([
      {
        id: 1,
        title: "A List",
        items: [
          {
            id: 1,
            title: "a task"
          },
          {
            id: 3,
            title: "another task"
          },
          {
            id: 4,
            title: "task number three"
          }
        ]
      },
      {
        id: 2,
        title: "A Second List",
        items: [
          {
            id: 6,
            title: "a task"
          },
          {
            id: 2,
            title: "another task"
          },
          {
            id: 9,
            title: "task number three"
          }
        ]
      },
      {
        id: 3,
        title: "List Number Three",
        items: [
          {
            id: 8,
            title: "a task"
          },
          {
            id: 7,
            title: "another task"
          },
          {
            id: 10,
            title: "task number three"
          }
        ]
      }
    ]))
  }

  render() {
    return (
      <div className="Project">
        {
          this.props.lists.map(list => {
            return <List key={list.id} title={list.title} items={list.items} />
          })
        }
      </div>
    )
  }

}
