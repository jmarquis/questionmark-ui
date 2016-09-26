import "./Authentication.less"

import React, { Component } from "react"

import { authenticate, isAuthenticated, resetAuthentication } from "../../etc/auth"
import { goto } from "../../etc/nav"

import Fieldset from "Fieldset"
import TextInput from "TextInput"
import Button from "Button"

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
          <Fieldset>
            <TextInput name="email" value={this.state.email} onChange={this.handleEmailChange} />
            <TextInput type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </Fieldset>
          <Button type="submit" text="Sign in" />
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
    goto("/projects/1")
  }

  handleAuthenticationError = error => {
    alert(error)
  }

}
