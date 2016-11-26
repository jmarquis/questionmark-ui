import "./Authentication.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import { authenticate } from "../../actions/user"

import AuthenticationForm from "AuthenticationForm"

@connect(state => {
  const { dispatch, location } = state
  return {
    dispatch,
    location
  }
})
export default class Authentication extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    location: PropTypes.object
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    this.context.router.replaceWith("/")
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

}
