import "./List.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import classNames from "classnames"
import autosize from "autosize"

import { fetchList, createCard } from "../../actions/lists"
import { deleteCard } from "../../actions/cards"

import IconButton from "IconButton"
import Card from "Card"

import PencilIcon from "pencil"
import XIcon from "x"

@connect((state, ownProps) => {
  const { id } = ownProps
  const { cards, lists: { [id]: list } } = state
  const listCards = list ? list.card_ids.map(cardId => cards[cardId]) : []
  const sortedListCards = list ? listCards.sort((cardA, cardB) => {
    return cardA.position - cardB.position
  }) : []
  return {
    cards: sortedListCards
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
    editing: false
  }

  componentDidMount() {
    const { dispatch, id } = this.props
    dispatch(fetchList(id))
    autosize(this.newCardInput)
  }

  componentDidUpdate(prevProps) {
    const { cards: prevCards } = prevProps
    const { cards } = this.props
    if (prevCards && prevCards.length && cards && cards.length) {
      const prevLastCard = prevCards[prevCards.length - 1]
      const lastCard = cards[cards.length - 1]
      if (prevLastCard && lastCard && prevLastCard.id !== lastCard.id) {
        this.list.scrollTop = this.list.scrollHeight
      }
    }
  }

  componentWillUnmount() {
    autosize.destroy(this.newCardInput)
  }

  render() {
    const { id, cards } = this.props
    const { editing, newCardTitle } = this.state
    return (
      <div
        className={classNames("List", {
          empty: !cards.length,
          editing
        })}
      >
        <header>
          <input
            type="text"
            readOnly={!editing}
            value={this.props.title}
          />
          <IconButton onClick={this.handleEditClick}>
            { editing ? <XIcon /> : <PencilIcon /> }
          </IconButton>
        </header>
        <ul ref={list => { this.list = list }}>
          {
            cards.map(card => {
              if (!card) return null
              return (
                <Card
                  key={card.id}
                  id={card.id}
                  position={card.position}
                  listId={id}
                  title={card.title}
                  onClick={() => this.handleCardClick(card.id)}
                />
              )
            })
          }
        </ul>
        <footer>
          <textarea
            ref={textarea => { this.newCardInput = textarea }}
            rows={1}
            placeholder="+ new card"
            value={newCardTitle}
            onChange={this.handleNewCardTitleChange}
            onKeyDown={this.handleNewCardInputKeyDown}
          />
        </footer>
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

  handleNewCardTitleChange = event => {
    this.setState({ newCardTitle: event.target.value })
  }

  handleNewCardInputKeyDown = event => {
    if (event.keyCode === 13 || event.keyCode === 9) {
      event.preventDefault()
      const { dispatch, id } = this.props
      const { newCardTitle } = this.state
      if (newCardTitle) {
        dispatch(createCard(id, newCardTitle))
        this.setState({
          newCardTitle: ""
        }, () => {
          autosize.update(this.newCardInput)
        })
      }
    }
  }

  handleCardClick = (cardId) => {
    const { dispatch } = this.props
    dispatch(deleteCard(cardId))
  }

}
