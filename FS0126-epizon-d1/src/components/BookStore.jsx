import { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import BookList from "./BookList"
import BookDetail from "./BookDetail"
import { useDispatch, useSelector } from "react-redux"
import { getBooksCreator } from "../redux/actions"

const BookStore = () => {
  const books = useSelector((reduxStore) => {
    return reduxStore.shop.books
  })

  const [bookSelected, setBookSelected] = useState(null)
  const dispatch = useDispatch()
  // const [books, setBooks] = useState([]) questo non è più utile perché i books vengono salvati in redux
  useEffect(() => {
    // per recuperare i libri dispatchamo l'action creator
    dispatch(getBooksCreator())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changeBook = (book) => setBookSelected(book)

  return (
    <Row className="center-row">
      <Col lg={4}>
        <BookList bookSelected={bookSelected} changeBook={changeBook} books={books} />
      </Col>
      <Col lg={8}>
        <BookDetail bookSelected={bookSelected} />
      </Col>
    </Row>
  )
}

export default BookStore
