import "./Button.less"

import React, { Component, PropTypes } from "react"

export default class Button extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    const { text, ...otherProps } = this.props;
    return (
      <button className="Button" type="button" {...otherProps}>
        {text}
      </button>
    )
  }

}
