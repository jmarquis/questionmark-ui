import "./Button.less"

import React, { Component, PropTypes } from "react"
import classNames from "classnames"

export default class Button extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string,
    transparent: PropTypes.bool
  }

  render() {
    const { text, ...otherProps } = this.props
    return (
      <button
        className={classNames("Button", {
          [this.props.size]: this.props.size,
          transparent: this.props.transparent
        })}
        type="button"
        {...otherProps}
      >
        {text}
      </button>
    )
  }

}
