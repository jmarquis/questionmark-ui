import React, { Component, PropTypes } from "react"
import { BrowserRouter } from "react-router"
import { connect } from "react-redux"

@connect(state => {
  const { location, dispatch } = state
  return {
    location,
    dispatch
  }
})
export default class Router extends Component {

  static propTypes = {
    children: PropTypes.node,
    dispatch: PropTypes.func
  }

  render() {
    return (
      <BrowserRouter location={location} onChange={this.handleLocationChange}>
        {this.props.children}
      </BrowserRouter>
    )
  }

  handleLocationChange = location => {
    const { dispatch } = this.props
    dispatch({
      type: "LOCATION_CHANGE",
      location
    })
  }

}
