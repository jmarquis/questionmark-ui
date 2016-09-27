import "./Button.less"

import React, { Component, PropTypes } from "react"

export default class Button extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string
  }

  render() {
    const { text, ...otherProps } = this.props
    return (
      <button
        className={ "Button" + (this.props.size ? ` ${this.props.size}` : "") }
        type="button"
        {...otherProps}
      >
        {text}
      </button>
    )
  }

}
