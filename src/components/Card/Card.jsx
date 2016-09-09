import "./Card.less"

import React, { Component, PropTypes } from "react"

export default class Card extends Component {

  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return (
      <div className="Card">
        {this.props.title}ssss
      </div>
    )
  }

}
