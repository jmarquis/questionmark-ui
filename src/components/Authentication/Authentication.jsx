import "./Authentication.less"

import React, { Component } from "react"

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
    if (!this.state.checkComplete) return <div>loading</div>
    return (
      <div className="Authentication dark">
        <figure></figure>
        <AuthenticationForm onSubmit={this.handleSubmit} />
      </div>
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
