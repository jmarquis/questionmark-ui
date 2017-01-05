import "./Card.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import autosize from "autosize"
import classNames from "classnames"
import { DragSource, DropTarget } from "react-dnd"

import { moveCard } from "actions/cards"

@connect()
@DragSource("CARD", {
  beginDrag(props) {
    return {
      cardId: props.id
    }
  }
}, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
@DropTarget("CARD", {
  drop(props, monitor) {
    const { dispatch } = props
    dispatch(moveCard(monitor.getItem().cardId, props.listId))
  }
}, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))
export default class Card extends Component {

  static propTypes = {
    title: PropTypes.string,
    listId: PropTypes.number,
    editing: PropTypes.bool,
    placeholder: PropTypes.string,
    onTitleChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onEnter: PropTypes.func,
    onTab: PropTypes.func,
    connectDragSource: PropTypes.func,
    connectDropTarget: PropTypes.func,
    isDragging: PropTypes.bool,
    isOver: PropTypes.bool,
    onClick: PropTypes.func
  }

  state = {
    focus: false
  }

  componentDidMount() {
    autosize(this.textarea)
  }

  componentWillUnmount() {
    autosize.destroy(this.textarea)
  }

  render() {
    const {
      connectDragSource,
      connectDropTarget,
      isDragging,
      isOver,
      editing,
      title,
      onClick
    } = this.props
    const { focus } = this.state
    return connectDragSource(connectDropTarget(
      <li
        className={classNames("Card", {
          editing,
          focus,
          "is-dragging": isDragging,
          "is-over": isOver
        })}
        onClick={onClick}
      >
        <textarea
          ref={textarea => { this.textarea = textarea }}
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
    ))
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
          this.textarea.blur()
          this.handleEnter(event)
          break
        case 9:
          event.preventDefault()
          this.textarea.blur()
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
    this.textarea.focus()
  }

}
