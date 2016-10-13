import "./Form.less"

import React, { Component, PropTypes } from "react"
import classNames from "classnames"

export default class Form extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onSubmit: PropTypes.func
  }

  render() {
    const { className, onSubmit, ...otherProps } = this.props
    return (
      <form
        {...otherProps}
        className={classNames("Form", { [className]: className })}
        onSubmit={event => this.handleSubmit(event, onSubmit)}
      >
        {this.props.children}
      </form>
    )
  }

  handleSubmit(event, onSubmit) {
    event.preventDefault()
    if (onSubmit) onSubmit(event)
  }

}
