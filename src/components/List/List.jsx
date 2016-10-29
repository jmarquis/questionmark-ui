import "./List.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import classNames from "classnames"

import { fetchList, createCard } from "../../actions/lists"

import Card from "Card"
import TextInput from "TextInput"

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
    newCard: false
  }

  componentDidMount() {
    const { dispatch, id } = this.props
    dispatch(fetchList(id))
  }

  render() {
    const { cards } = this.props
    return (
      <div className={classNames("List", { empty: !cards.length })}>
        <header>
          {this.props.title}
        </header>
        <ul>
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
            return <button type="button" onClick={this.handleAddClick} />
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

  handleNewCardBlur = title => {
    const { dispatch, id } = this.props
    this.setState({
      newCard: false
    })
    dispatch(createCard(id, title))
  }

}
