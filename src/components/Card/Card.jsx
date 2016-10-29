import "./Card.less"

import React, { Component, PropTypes } from "react"
import autosize from "autosize"
import classNames from "classnames"

export default class Card extends Component {

  static propTypes = {
    title: PropTypes.string,
    editing: PropTypes.bool,
    onBlur: PropTypes.func
  }

  state = {
    title: this.props.title
  }

  componentDidMount() {
    autosize(this.refs.textarea)
  }

  componentWillUnmount() {
    autosize.destroy(this.refs.textarea)
  }

  render() {
    const { editing } = this.props
    return (
      <li className={classNames("Card", { editing })}>
        <textarea
          ref="textarea"
          rows={1}
          readOnly={!editing}
          value={this.state.title}
          onChange={this.handleTitleChange}
          autoFocus={this.props.editing}
          onBlur={this.handleBlur}
        />
      </li>
    )
  }

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    })
  }

  handleBlur = () => {
    if (this.props.editing) {
      this.props.onBlur(this.state.title)
    }
  }

}
