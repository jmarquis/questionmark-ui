import "./App.less"

import React, { Component, PropTypes } from "react"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import { connect } from "react-redux"
import { DragDropContext } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"

import { fetchUser } from "../../actions/user"

import MenuLayout from "MenuLayout"
import Authentication from "Authentication"

@connect(state => {
  const { dispatch, user } = state
  return {
    dispatch,
    user
  }
})
@DragDropContext(HTML5Backend)
export default class App extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    user: PropTypes.any
  }

  componentDidMount() {
    const { dispatch } = this.props
    setTimeout(() => {
      if (document.readyState === "complete") {
        dispatch(fetchUser())
      } else {
        document.addEventListener("readystatechange", () => {
          if (document.readyState === "complete") {
            dispatch(fetchUser())
          }
        })
      }
    }, 500)
  }

  render() {
    const { user } = this.props
    return (
      <ReactCSSTransitionGroup
        transitionName="layout"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        component="main"
        id="App"
      >
        {(() => {
          if (user === false) {
            return <Authentication key="Authentication" />
          } else if (user) {
            return <MenuLayout key="MenuLayout" />
          } else {
            return null
          }
        })()}
      </ReactCSSTransitionGroup>
    )
  }

}
