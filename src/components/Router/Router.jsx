import React, { Component, PropTypes } from "react"
import { BrowserRouter } from "react-router"

export default class Router extends Component {

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <BrowserRouter onChange={a => console.log(a)}>
        {this.props.children}
      </BrowserRouter>
    )
  }

}
