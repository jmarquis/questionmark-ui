import "./Authentication.less"

import React, { Component } from "react"

import fetchJson from "../../etc/fetchJson"

export default class Authentication extends Component {

  state = {
    email: "",
    password: ""
  }

  render() {
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
    fetchJson("sessions", {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      })
    })
  }

}
