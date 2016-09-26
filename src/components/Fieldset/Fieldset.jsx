import "./Fieldset.less"

import React, { Component, PropTypes } from "react"

export default class Fieldset extends Component {

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <fieldset className="Fieldset">
        {this.props.children}
      </fieldset>
    )
  }

}
