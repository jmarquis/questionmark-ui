import React, { Component } from "react"

import Form from "Form"
import Fieldset from "Fieldset"
import Field from "Field"
import TextInput from "TextInput"
import Button from "Button"

export default class AuthenticationForm extends Component {

  state = {
    email: "",
    password: ""
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Fieldset>
          <Field label="Email Address">
            <TextInput
              name="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
              autoFocus
            />
          </Field>
          <Field label="Password">
            <TextInput
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </Field>
        </Fieldset>
        <Button
          type="submit"
          size="large"
          text="Sign in"
        />
        <Button text="Register" transparent />
      </Form>
    )
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

}
