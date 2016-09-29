import "./Field.less"

import React, { Component, PropTypes } from "react"

import Label from "Label"

export default class Field extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <div className="Field">
        <Label text={this.props.label} />
        {this.props.children}
      </div>
    )
  }

}
