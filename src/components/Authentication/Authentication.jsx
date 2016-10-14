import "./Authentication.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import { authenticate } from "../../actions/session"
import { goto } from "../../etc/nav"

import AuthenticationForm from "AuthenticationForm"

@connect(state => {
  const { dispatch } = state
  return {
    dispatch
  }
})
export default class Authentication extends Component {

  static propTypes = {
    dispatch: PropTypes.func
  }

  render() {
    return (
      <div key="Authentication" className="Authentication dark">
        <figure></figure>
        <AuthenticationForm onSubmit={this.handleSubmit} />
      </div>
    )
  }

  handleSubmit = (event, state) => {
    event.preventDefault()
    const { dispatch } = this.props
    const { email, password } = state
    dispatch(authenticate({ email, password }))
  }

  handleAuthenticated = () => {
    goto("/projects/1")
  }

  handleAuthenticationError = error => {
    alert(error)
  }

}
