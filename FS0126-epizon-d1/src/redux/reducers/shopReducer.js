// in questo reducer ci saranno solo i libri disponibili per l'acquisto

import { GET_BOOKS } from "../actions"

const initialState = {
  books: [],
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS: {
      return {
        ...state,
        books: action.payload,
      }
    }

    default:
      return state
  }
}

export default shopReducer
