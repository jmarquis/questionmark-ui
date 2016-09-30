import "./Label.less"

import React, { Component, PropTypes } from "react"

export default class Label extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    const { text, ...otherProps } = this.props
    return (
      <label className="Label" {...otherProps}>
        {text}
      </label>
    )
  }

}
