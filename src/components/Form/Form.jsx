import "./Form.less"

import React, { Component, PropTypes } from "react"

export default class Form extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  }

  render() {
    const { className, ...otherProps } = this.props
    return (
      <form className={`Form ${className}`} {...otherProps}>
        {this.props.children}
      </form>
    )
  }

}
