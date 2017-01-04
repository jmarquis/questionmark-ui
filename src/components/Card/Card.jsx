import "./Card.less"

import React, { Component, PropTypes } from "react"
import autosize from "autosize"
import classNames from "classnames"

export default class Card extends Component {

  static propTypes = {
    title: PropTypes.string,
    editing: PropTypes.bool,
    placeholder: PropTypes.string,
    onTitleChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onEnter: PropTypes.func,
    onTab: PropTypes.func
  }

  state = {
    focus: false
  }

  componentDidMount() {
    autosize(this.refs.textarea)
  }

  componentWillUnmount() {
    autosize.destroy(this.refs.textarea)
  }

  render() {
    const { editing, title } = this.props
    const { focus } = this.state
    return (
      <li className={classNames("Card", { editing, focus })}>
        <textarea
          ref="textarea"
          rows={1}
          readOnly={!editing}
          value={title}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleTitleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          placeholder={this.props.placeholder}
        />
      </li>
    )
  }

  handleFocus = event => {
    if (this.props.editing) {
      this.setState({ focus: true })
      if (this.props.onFocus) {
        this.props.onFocus(event)
      }
    }
  }

  handleBlur = event => {
    if (this.props.editing) {
      this.setState({ focus: false })
      if (this.props.onBlur) {
        this.props.onBlur(event)
      }
    }
  }

  handleKeyDown = event => {
    if (this.props.editing) {
      switch (event.keyCode) {
        case 13:
          event.preventDefault()
          this.refs.textarea.blur()
          this.handleEnter(event)
          break
        case 9:
          event.preventDefault()
          this.refs.textarea.blur()
          this.handleTab(event)
          break
      }
    }
  }

  handleTitleChange = event => {
    this.props.onTitleChange(event.target.value)
  }

  handleEnter = event => {
    if (this.props.editing && this.props.onEnter) {
      this.props.onEnter(event)
    }
  }

  handleTab = event => {
    if (this.props.editing && this.props.onTab) {
      this.props.onTab(event)
    }
  }

  focus = () => {
    this.refs.textarea.focus()
  }

}
