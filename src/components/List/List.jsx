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
    editing: false
  }

  componentDidMount() {
    const { dispatch, id } = this.props
    dispatch(fetchList(id))
  }

  render() {
    const { cards } = this.props
    const { editing } = this.state
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
        <ul>
          {
            cards.map(card => {
              if (!card) return null
              return <Card key={card.id} title={card.title} />
            })
          }
        </ul>
        <footer>
          <ul>
            <Card
              editing={true}
              placeholder="+ new card"
              onEnter={this.handleNewCardEnter}
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

  handleNewCardEnter = ({ state }) => {
    const { dispatch, id } = this.props
    if (state.title) {
      dispatch(createCard(id, state.title))
    }
  }

}
