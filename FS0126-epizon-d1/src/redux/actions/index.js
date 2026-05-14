// Questo file non aggiunge nessuna funzionalità nuova, ma crea una struttura opiù robusta
// per il nostro sistema redux destinato a crescere

// Per prima cosa inseriremo una volta per tutte delle costanti come ACTION TYPES

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

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
