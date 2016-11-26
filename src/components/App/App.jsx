import "./App.less"

import React, { Component, PropTypes } from "react"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import { connect } from "react-redux"

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
export default class App extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    user: PropTypes.any
  }

  componentDidMount() {
    const { dispatch } = this.props
    if (document.readyState === "complete") {
      setTimeout(() => {
        dispatch(fetchUser())
      }, 500)
    } else {
      document.addEventListener("readystatechange", () => {
        if (document.readyState === "complete") {
          dispatch(fetchUser())
        }
      })
    }
  }

  render() {
    const { user } = this.props
    return (
      <ReactCSSTransitionGroup
        transitionName="layout"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
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
