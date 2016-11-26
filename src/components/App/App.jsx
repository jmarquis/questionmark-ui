import "./App.less"

import React, { Component, PropTypes } from "react"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import { connect } from "react-redux"

import { fetchSession } from "../../actions/session"

import MenuLayout from "MenuLayout"
import Authentication from "Authentication"

@connect(state => {
  const { dispatch, session } = state
  return {
    dispatch,
    session
  }
})
export default class App extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    session: PropTypes.any
  }

  componentDidMount() {
    const { dispatch } = this.props
    if (document.readyState === "complete") {
      setTimeout(() => {
        dispatch(fetchSession())
      }, 500)
    } else {
      document.addEventListener("readystatechange", () => {
        if (document.readyState === "complete") {
          dispatch(fetchSession())
        }
      })
    }
  }

  render() {
    const { session } = this.props
    return (
      <ReactCSSTransitionGroup
        transitionName="layout"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        component="main"
        id="App"
      >
        {(() => {
          if (session === false) {
            return <Authentication key="Authentication" />
          } else if (session) {
            return <MenuLayout key="MenuLayout" />
          } else {
            return null
          }
        })()}
      </ReactCSSTransitionGroup>
    )
  }

}
