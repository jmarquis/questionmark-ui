import "./List.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import classNames from "classnames"

import { fetchList, createCard } from "../../actions/lists"

import IconButton from "IconButton"
import Card from "Card"

import PlusIcon from "plus"
import PencilIcon from "pencil"
import XIcon from "x"

@connect((state, ownProps) => {
  const { id } = ownProps
  const { cards, lists: { [id]: list } } = state
  return {
    cards: list ? list.card_ids.map(cardId => {
      return typeof cardId === "number" ? cards[cardId] : cardId
    }) : []
  }
})
export default class List extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    cards: PropTypes.array,
  }

  state = {
    editing: false,
    newCard: false,
    topBorder: false,
    bottomBorder: false
  }

  componentDidMount() {
    const { dispatch, id } = this.props
    dispatch(fetchList(id))
  }

  componentDidUpdate() {
    this.updateListState()
  }

  render() {
    const { cards } = this.props
    const { editing } = this.state
    return (
      <div
        className={classNames("List", {
          empty: !cards.length,
          editing,
          "top-border": this.state.topBorder,
          "bottom-border": this.state.bottomBorder
        })}
      >
        <header>
          <div>
            <input
              type="text"
              readOnly={!editing}
              value={this.props.title}
            />
            <IconButton onClick={this.handleEditClick}>
              { editing ? <XIcon /> : <PencilIcon /> }
            </IconButton>
          </div>
          <ul className="menu">
            <li><a onClick={this.handleArchiveClick}>Archive list</a></li>
          </ul>
        </header>
        <ul ref="cards" onScroll={this.handleCardsScroll}>
          {
            cards.map(card => {
              if (!card) return null
              return <Card key={card.id} title={card.title} />
            })
          }
          {(() => {
            if (this.state.newCard) {
              return <Card editing={true} onBlur={this.handleNewCardBlur} />
            }
          })()}
        </ul>
        {(() => {
          if (!this.state.newCard) {
            return (
              <footer>
                <button type="button" onClick={this.handleAddClick}>
                  <PlusIcon />
                </button>
              </footer>
            )
          }
        })()}
      </div>
    )
  }

  handleAddClick = () => {
    this.setState({
      newCard: true
    })
  }

  handleEditClick = () => {
    const { editing } = this.state
    this.setState({
      editing: !editing
    })
  }

  handleNewCardBlur = title => {
    const { dispatch, id } = this.props
    this.setState({
      newCard: false
    })
    if (title) {
      dispatch(createCard(id, title))
    }
  }

  handleCardsScroll = () => {
    this.updateListState()
  }

  updateListState = () => {
    const { cards } = this.refs
    const topBorder = cards.scrollTop > 0
    const bottomBorder = cards.scrollTop + cards.offsetHeight < cards.scrollHeight
    if (topBorder !== this.state.topBorder || bottomBorder !== this.state.bottomBorder) {
      this.setState({
        topBorder,
        bottomBorder
      })
    }
  }

}
