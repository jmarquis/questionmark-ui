import "./TextInput.less"

import React, { Component, PropTypes } from "react"

export default class TextInput extends Component {

  render() {
    return (
      <input
        className="TextInput"
        type="text"
        {...this.props}
      />
    )
  }

}
