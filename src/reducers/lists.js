export function lists(state = {}, action) {

  switch (action.type) {

    case "UPDATE_LISTS":
      return {
        ...state,
        ...action.lists
      }

    case "CREATE_CARD":
      return {
        ...state,
        [action.listId]: {
          ...state[action.listId],
          card_ids: [
            ...state[action.listId].card_ids,
            action.card.id
          ]
        }
      }

    default:
      return state

  }

}
