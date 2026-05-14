import { GET_SEARCH } from "../actions"

const initialState = {
  jobs: [],
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH:
      return {
        ...state,
        jobs: action.payload,
      }

    default:
      return state
  }
}

export default searchReducer
