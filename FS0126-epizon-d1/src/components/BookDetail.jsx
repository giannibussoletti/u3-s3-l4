import { Col, Row, Button } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { addToCartCreator } from "../redux/actions"

const BookDetail = ({ bookSelected }) => {
  const dispatch = useDispatch()
  const username = useSelector((reduxStore) => {
    return reduxStore.user.name // questo è il nome utente --> inizialmente stringa vuota
  })
  return (
    <div className="mt-3 mb-4 mb-lg-0">
      {bookSelected ? (
        <>
          <Row>
            <Col sm={12}>
              <h1>{bookSelected.title}</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={4}>
              <div className="mt-3">
                <img className="book-cover" src={bookSelected.imageUrl} alt="book selected" />
              </div>
            </Col>
            <Col sm={8}>
              <p>
                <span className="fw-bold">Description:</span>&nbsp;
                {bookSelected.description}
              </p>
              <p>
                <span className="fw-bold">Price:</span>&nbsp;
                {bookSelected.price}$
              </p>
              {/* Ora andiamo a montare dinamicamente il bottone sotto, e lo faccio solo se
              lo state.user.name non è vuoto
              se state.user.name è stringa vuota, invece del bottone mostriamo un messaggio */}

              {/* verifico che username sia un valore truthy cioè abbia length > 0 */}
              {username ? (
                <Button
                  className="d-flex align-items-center"
                  onClick={() => {
                    dispatch(addToCartCreator(bookSelected))
                  }}>
                  <span className="me-2">AGGIUNGI AL</span>
                  <FaShoppingCart />
                </Button>
              ) : (
                <p className="fst-italic">
                  Per aggiungere questo libro al carrello, effettua il login!
                </p>
              )}
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            <h3>Clicca su un libro per i dettagli</h3>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default BookDetail
