import "./List.less"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import classNames from "classnames"

import { fetchList } from "../../actions/lists"

import Card from "Card"

@connect((state, ownProps) => {
  const { id } = ownProps
  const { cards, lists: { [id]: list } } = state
  return {
    cards: list ? list.card_ids.map(cardId => cards[cardId]) : []
  }
})
export default class List extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    cards: PropTypes.array,
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
              if (!card) return null;
              return <Card key={card.id} title={card.title} />
            })
          }
        </ul>
        <button type="button" onClick={this.handleAddClick} />
      </div>
    )
  }

  handleAddClick = () => {
    const { dispatch, id } = this.props
    dispatch(createCard(id))
  }

}
