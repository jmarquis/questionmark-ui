import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import { destroySession } from "actions/session"

@connect()
export default class SignOut extends Component {

  static propTypes = {
    dispatch: PropTypes.func
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(destroySession())
  }

  render() {
    return <div>hey</div>
  }

}
