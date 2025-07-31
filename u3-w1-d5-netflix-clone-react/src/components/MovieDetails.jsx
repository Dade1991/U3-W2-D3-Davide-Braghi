// import { useParams } from "react-router-dom"
// import { useEffect, useState } from "react"
// import { Container, Row, Col, Card } from "react-bootstrap"

// const MovieDetails = () => {
//   const { imdbID } = useParams()
//   const [movie, setMovie] = useState(null)
//   const [reviews, setReviews] = useState([])

//   const movieAPI = `http://www.omdbapi.com/?apikey=bca9c7b9&i=${imdbID}`
//   const reviewAPI = `https://striveschool-api.herokuapp.com/api/${imdbID}`

//   useEffect(() => {
//     fetch(movieAPI)
//       .then((res) => {
//         if (res.ok) {
//           return res.json()
//         } else {
//           throw new Error("Failed to fetch movie details")
//         }
//       })
//       .then((data) => {
//         setMovie(data)
//       })
//       .catch((err) => {
//         console.error("Movie fetch error:", err)
//       })

//     fetch(reviewAPI, {
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYmIzMjc4Y2RkZjAwMTU1ZDY3OWYiLCJpYXQiOjE3NTM4ODUzNzAsImV4cCI6MTc1NTA5NDk3MH0.SnnDz71x7eSFFUp1HJOchDaNWGFbVYm-u7PCegEdJW0",
//       },
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json()
//         } else {
//           throw new Error("Failed to fetch reviews")
//         }
//       })
//       .then((data) => {
//         setReviews(data)
//       })
//       .catch((err) => {
//         console.error("Reviews fetch error:", err)
//       })
//   }, [imdbID])

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col xs={12} md={6}>
//           <Card className="text-center">
//             <Card.Img variant="top" src={movie.Poster} />
//             <Card.Body>
//               <Card.Title>{movie.Title}</Card.Title>
//               <Card.Text>
//                 <strong>Year:</strong> {movie.Year}
//               </Card.Text>
//               <Card.Text>
//                 <strong>Plot:</strong> {movie.Plot}
//               </Card.Text>

//               {reviews.length > 0 ? (
//                 <>
//                   <h5 className="mt-4">Reviews</h5>
//                   <ul className="list-unstyled">
//                     {reviews.map((rev, index) => (
//                       <li key={index}>
//                         <blockquote>"{rev.comment}"</blockquote>
//                         <footer>— {rev.author}</footer>
//                       </li>
//                     ))}
//                   </ul>
//                 </>
//               ) : (
//                 <p className="text-muted">No reviews available</p>
//               )}
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   )
// }

// export default MovieDetails

import { Container, Row, Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const endPointI = "http://www.omdbapi.com/?apikey=bca9c7b9&i"

const MovieDetails = () => {
  const { movieId } = useParams()

  useEffect(() => {
    fetch(endPointI + movieId)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(`ERROR`)
        }
      })
      .then((movieDetails) => {
        console.log(`Details:`, movieDetails)

        setMovie(movieDetails)
      })
      .catch()
  })

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2>Movie Details</h2>
          <Card className="text-center">
            // <Card.Img variant="top" src={movie.Poster} />
            //{" "}
            <Card.Body>
              // <Card.Title>{movie.Title}</Card.Title>
              //{" "}
              <Card.Text>
                // <strong>Plot:</strong> {movie.Plot}
                //{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetails
