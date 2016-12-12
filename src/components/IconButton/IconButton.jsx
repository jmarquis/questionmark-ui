import "./IconButton.less"

import React, { Component, PropTypes } from "react"

export default class IconButton extends Component {

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children, ...otherProps } = this.props
    return (
      <button className="IconButton" {...otherProps}>
        {children}
      </button>
    )
  }

}
