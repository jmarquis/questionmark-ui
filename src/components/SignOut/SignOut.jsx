import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import { endSession } from "actions/user"

@connect()
export default class SignOut extends Component {

  static propTypes = {
    dispatch: PropTypes.func
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(endSession())
  }

  render() {
    return null
  }

}
