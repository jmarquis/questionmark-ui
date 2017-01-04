import "./List.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import classNames from "classnames"

import { fetchList, createCard } from "../../actions/lists"

import IconButton from "IconButton"
import Card from "Card"

import PencilIcon from "pencil"
import XIcon from "x"

@connect((state, ownProps) => {
  const { id } = ownProps
  const { cards, lists: { [id]: list } } = state
  return {
    cards: list ? list.card_ids.map(cardId => {
      return cards[cardId]
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
    editing: false
  }

  componentDidMount() {
    const { dispatch, id } = this.props
    dispatch(fetchList(id))
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
                  listId={id}
                  title={card.title}
                />
              )
            })
          }
        </ul>
        <footer>
          <ul>
            <Card
              ref={card => { this.newCard = card }}
              editing={true}
              placeholder="+ new card"
              title={newCardTitle}
              onTitleChange={this.handleNewCardTitleChange}
              onEnter={this.handleNewCardEnterOrTab}
              onTab={this.handleNewCardEnterOrTab}
            />
          </ul>
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

  handleNewCardTitleChange = newCardTitle => {
    this.setState({ newCardTitle })
  }

  handleNewCardEnterOrTab = () => {
    const { dispatch, id } = this.props
    const { newCardTitle } = this.state
    if (newCardTitle) {
      dispatch(createCard(id, newCardTitle))
      this.setState({
        newCardTitle: ""
      }, () => {
        this.newCard.focus()
      })
    }
  }

}
