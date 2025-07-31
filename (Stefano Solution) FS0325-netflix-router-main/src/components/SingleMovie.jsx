import { Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const SingleMovie = ({ data }) => {
  const navigate = useNavigate()

  return (
    <Col className="mb-2">
      <Link to={'/movie-details/' + data.imdbID}>
        <img
          className="img-fluid"
          src={data.Poster}
          alt="movie"
          // onClick={() => {
          //   navigate('/movie-details/' + data.imdbID)
          // }}
        />
      </Link>
    </Col>
  )
}

export default SingleMovie
