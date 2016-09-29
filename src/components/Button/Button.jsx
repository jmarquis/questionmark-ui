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

    const {
      text,
      size,
      transparent,
      ...otherProps
    } = this.props

    return (
      <button
        className={classNames("Button", {
          [size]: size,
          transparent
        })}
        type="button"
        {...otherProps}
      >
        {text}
      </button>
    )

  }

}
