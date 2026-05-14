export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE"
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE"
export const GET_SEARCH = "GET_SEARCH"

export const removeFromFavouriteAction = (fav) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: fav,
  }
}

export const addToFavouriteAction = (company_name) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: company_name,
  }
}

export const handleSubmitAction = (query) => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20")
      if (response.ok) {
        const { data } = await response.json()
        dispatch({ type: GET_SEARCH, payload: data })
      } else {
        alert("Error fetching results")
      }
    } catch (error) {
      console.log(error)
    }
  }
}
