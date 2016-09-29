import "./Label.less"

import React, { Component, PropTypes } from "react"

export default class Label extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    return (
      <label className="Label">
        {this.props.text}
      </label>
    )
  }

}
