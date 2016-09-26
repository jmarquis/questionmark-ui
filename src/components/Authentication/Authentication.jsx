import "./Authentication.less"

import React, { Component } from "react"

import { authenticate, isAuthenticated, resetAuthentication } from "../../etc/auth"
import { goto } from "../../etc/nav"

export default class Authentication extends Component {

  state = {
    checkComplete: false,
    email: "",
    password: ""
  }

  componentDidMount() {
    resetAuthentication().then(() => {
      isAuthenticated().then(this.handleAuthenticated).catch(() => {
        this.setState({
          checkComplete: true
        })
      })
    })
  }

  render() {

    if (!this.state.checkComplete) return <div>loading</div>

    return (
      <div className="Authentication">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email" value={this.state.email} onChange={this.handleEmailChange} />
          <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
          <input type="submit" value="Sign in" />
        </form>
      </div>
    )

  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    authenticate({ email, password })
      .then(this.handleAuthenticated)
      .catch(this.handleAuthenticationError)
  }

  handleAuthenticated = () => {
    console.log("done!")
    goto("/projects/1")
  }

  handleAuthenticationError = error => {
    console.log("fail!")
    alert(error)
  }

}
