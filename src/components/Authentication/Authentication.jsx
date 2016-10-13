import "./Authentication.less"

import React, { Component, PropTypes, Children } from "react"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import { connect } from "react-redux"

import { fetchCurrentUser, authenticate } from "../../actions/user"
import { goto } from "../../etc/nav"

import AuthenticationForm from "AuthenticationForm"

@connect(state => {
  const { dispatch, user } = state
  return {
    dispatch,
    user
  }
})
export default class Authentication extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    user: PropTypes.any
  }

  componentDidMount() {
    const { dispatch } = this.props
    setTimeout(() => {
      dispatch(fetchCurrentUser())
    }, 500)
  }

  render() {
    const { user } = this.props
    return (
      <ReactCSSTransitionGroup
        transitionName="auth"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        component={props => Children.toArray(props.children)[0] || null}
      >
        {(() => {
          if (user === false) {
            return (
              <div key="Authentication" className="Authentication dark">
                <figure></figure>
                <AuthenticationForm onSubmit={this.handleSubmit} />
              </div>
            )
          }
        })()}
      </ReactCSSTransitionGroup>
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
