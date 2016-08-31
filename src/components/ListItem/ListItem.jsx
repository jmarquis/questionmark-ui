import "./ListItem.less"

import React, { Component, PropTypes } from "react"

export default class ListItem extends Component {

  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return (
      <div className="ListItem">
        {this.props.title}
      </div>
    )
  }

}
