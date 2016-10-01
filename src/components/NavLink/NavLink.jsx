import React, { Component, PropTypes } from "react"
import { Link } from "react-router"

import { connect } from "react-redux"

@connect(state => {
  const { location } = state
  return {
    location
  }
})
export default class NavLink extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    location: PropTypes.object
  }

  render() {
    const { dispatch, location, ...otherProps } = this.props
    return <Link {...otherProps} onClick={this.handleClick} activeClassName="current" />
  }

  handleClick = () => {
    const { dispatch } = this.props
    dispatch({
      type: "LOCATION_CHANGE",
      location: {
        pathname: window.location.path,
        search: "",
        hash: ""
      }
    })
  }

}
