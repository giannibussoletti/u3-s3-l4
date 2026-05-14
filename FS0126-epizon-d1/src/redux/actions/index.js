// Questo file non aggiunge nessuna funzionalità nuova, ma crea una struttura opiù robusta
// per il nostro sistema redux destinato a crescere

// Per prima cosa inseriremo una volta per tutte delle costanti come ACTION TYPES

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const USER_LOGGED = "USER_LOGGED"
export const GET_BOOKS = "GET_BOOKS"
// queste costanti mi permettono di essere sicuro che il nome delle azioni sia giusto ovunque
// questo perché esportando le costanti quando verranno richiamate nei vari compoment e nel reducer
// se scritte in maniera sbagliata verranno segnalate

// oltre ad esportare i type nel in questo file actions, è proprio metterci le action
// in questo modo le actions potranno essere dispatchate in maniera più pulita da diverse posizioni
// la cosa migliorare da fare è trasformare le varie azioni in funzioni, in maniera che il payload possa essere passato come parametro
// queste funzioni vengono chiamate ACTION CREATOR perché sono esattamente funzioni con dentro una singola funzione

export const addToCartCreator = (bookSelected) => {
  return {
    type: ADD_TO_CART, // si segue la nomenclatura delle costanti, es. URL
    payload: bookSelected,
  }
}

export const removeFromCartCreator = (book_id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: book_id, // passo l'informazione sul libro da rimuovere al reducer
  }
}

export const userLoggedCreator = (username) => {
  return {
    type: USER_LOGGED,
    payload: username, // questo sarà il nome utente registrato
  }
}

// introduciamo una versione di una normale ACTION CREATOR
// non sarà solamente una funzione che ritorna un oggetto (action)...
// ma una funzione che ritorna UNA FUNZIONE!

// questo grazie all'integrazione di redux-tookit di un plug-in chiamato "redux thunk"

export const getBooksCreator = () => {
  // qui invece che ritornare una action ritornerò una seconda funzione
  return (dispatch, getState) => {
    // in questa funzione possiamo anche eseguire logica asincrona
    fetch("https://striveschool-api.herokuapp.com/food-books")
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("errore nel recupero libri")
        }
      })
      .then((data) => {
        // Qui invece che salvare il json in uno stato locale, provvederemo a risvegliare
        // il reducer e dargli l'array di libri come payload
        dispatch({
          //<-- dispatch ritorna come prima argomento della funzione
          type: GET_BOOKS,
          payload: data,
        })
        console.log("getState", getState()) //<-- questo ritorna lo stato attuale dello store
        // è utile per creare cicli, if/else o logica per creare azioni specifiche che vadano
        // ad influire sullo store
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
