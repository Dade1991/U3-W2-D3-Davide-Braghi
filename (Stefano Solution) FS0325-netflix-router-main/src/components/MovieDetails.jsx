import { Card, Col, ListGroup, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const MovieDetails = () => {
  // recuperiamo innanzitutto (se c'è) il movieId dalla barra degli indirizzi
  const params = useParams()
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [movieComments, setMovieComments] = useState([])

  // con questo movieId io tento una chiamata API verso omdbapi.com
  // la devo fare in uno useEffect all'avvio (""componentDidMount"")
  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=24ad60e9&i=' + params.movieId)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('errore nella chiamata omdb')
        }
      })
      .then((movieDetails) => {
        // salvo i dettagli recuperati nello stato del componente
        console.log('movieDetails', movieDetails)
        setMovie(movieDetails)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        console.log('errore nella chiamata omdb', err)
      })

    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + params.movieId,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWIwMjViMjYxNTAwMTk4YTY5NmEiLCJpYXQiOjE3NTM4ODc5NjgsImV4cCI6MTc1NTA5NzU2OH0.P-ejK5Pjla10WAW9I-gQH5U2ePXfOTBt0-J8o0_YtC8',
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nel recupero commenti')
        }
      })
      .then((comments) => {
        console.log(comments)
        // salvo anche i commenti in uno stato
        setMovieComments(comments)
      })
      .catch((err) => {
        console.log('errore nella chiamata striveschool', err)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <h2 className="text-center">DETTAGLI FILM</h2>
        {isLoading ? (
          <div className="text-center">
            <Spinner animation="border" variant="success" />
          </div>
        ) : (
          <Card>
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Plot}</Card.Text>
              <div>
                <h3 className="text-center">RECENSIONI DEL FILM</h3>
                <ListGroup>
                  {movieComments.map((commento) => {
                    return (
                      <ListGroup.Item key={commento._id}>
                        {commento.comment} - {commento.rate}
                      </ListGroup.Item>
                    )
                  })}
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        )}
      </Col>
    </Row>
  )
}

export default MovieDetails
