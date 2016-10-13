import "./Authentication.less"

import React, { Component, Children } from "react"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

import { authenticate, isAuthenticated, resetAuthentication } from "../../etc/auth"
import { goto } from "../../etc/nav"

import AuthenticationForm from "AuthenticationForm"

export default class Authentication extends Component {

  state = {
    checkComplete: false
  }

  componentDidMount() {
    isAuthenticated().then(this.handleAuthenticated).catch(() => {
      this.setState({
        checkComplete: true
      })
    })
  }

  render() {
    if (!this.state.checkComplete) return null
    return (
      <ReactCSSTransitionGroup
        transitionName="auth"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        component={props => Children.toArray(props.children)[0] || null}
      >
        <div key="Authentication" className="Authentication dark">
          <figure></figure>
          <AuthenticationForm onSubmit={this.handleSubmit} />
        </div>
      </ReactCSSTransitionGroup>
    )
  }

  handleSubmit = (event, state) => {
    event.preventDefault()
    const { email, password } = state
    authenticate({ email, password })
      .then(this.handleAuthenticated)
      .catch(this.handleAuthenticationError)
  }

  handleAuthenticated = () => {
    goto("/projects/1")
  }

  handleAuthenticationError = error => {
    alert(error)
  }

}
