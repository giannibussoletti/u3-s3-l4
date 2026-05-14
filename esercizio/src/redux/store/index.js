import { combineReducers, configureStore } from "@reduxjs/toolkit"
import favoriteReducer from "../reducers/favoriteReducer"
import searchReducer from "../reducers/searchReducer"

const store = configureStore({
  reducer: combineReducers({
    favourite: favoriteReducer,
    search: searchReducer,
  }),
})

export default store
