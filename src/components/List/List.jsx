import "./List.less"

import React, { Component } from "react"

import ListItem from "ListItem"

export default class List extends Component {

  render() {
    return (
      <div className="List">
        <header>
          List Title
        </header>
        <div>
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </div>
    )
  }

}
