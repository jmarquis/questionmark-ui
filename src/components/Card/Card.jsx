import "./Card.less"

import React, { Component, PropTypes } from "react"

export default class Card extends Component {

  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return (
      <li className="Card">
        {this.props.title}
      </li>
    )
  }

}
