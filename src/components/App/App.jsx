import "./App.less"

import React, { Component, PropTypes } from "react"
import { Match } from "react-router"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import { connect } from "react-redux"

import { fetchSession } from "../../actions/session"

import MenuLayout from "MenuLayout"
import Menu from "Menu"
import Authentication from "Authentication"
import Workspace from "Workspace"

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
    setTimeout(() => {
      dispatch(fetchSession())
    }, 500)
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

    if (this.props.session === false) {
      return (
        <ReactCSSTransitionGroup
          transitionName="auth"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          component="main"
          id="App"
          className="signed-out"
        >
          <Authentication key="Authentication" />
        </ReactCSSTransitionGroup>
      )
    } else if (this.props.session) {
      return (
        <ReactCSSTransitionGroup
          transitionName="auth"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          component="main"
          id="App"
        >
          <Menu key="Menu" />
          <Match pattern="/:workspaceId" component={Workspace} key="Workspace" />
        </ReactCSSTransitionGroup>
      )
    } else {
      return (
        <ReactCSSTransitionGroup
          transitionName="auth"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          component="main"
          id="App"
          className="signed-out"
        />
      )
    }
  }

}
