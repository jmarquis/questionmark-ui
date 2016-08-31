import "./List.less"

import React, { Component, PropTypes } from "react"

import ListItem from "ListItem"

export default class List extends Component {

  static propTypes = {
    title: PropTypes.string,
    items: PropTypes.array
  }

  render() {
    return (
      <div className="List">
        <header>
          {this.props.title}
        </header>
        <div>
          {
            this.props.items.map(item => {
              return <ListItem key={item.id} title={item.title} />
            })
          }
        </div>
      </div>
    )
  }

}
