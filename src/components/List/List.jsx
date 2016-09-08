import "./List.less"

import React, { Component, PropTypes } from "react"

import ListItem from "ListItem"

export default class List extends Component {

  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array
  }

  render() {
    return (
      <div className="List">
        <header>
          {this.props.title}
        </header>
        <div>
          {
            this.props.cards.map(card => {
              return <ListItem key={card.id} title={card.title} />
            })
          }
        </div>
      </div>
    )
  }

}
