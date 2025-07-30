import { Component } from "react"
import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/esm/Container"
import SingleMovie from "./SingleMovie"
import { Row, Col } from "react-bootstrap/esm"

const endPoint = "http://www.omdbapi.com/?apikey=bca9c7b9&s=Alien"

class MovieCarouselSecond extends Component {
  state = {
    movies: [],
  }

  getMovies = () => {
    fetch(endPoint)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Error has occurred during retrieving info")
        }
      })
      .then((data) => {
        console.log(data.Search)

        this.setState({ movies: data.Search })
      })
      .catch((err) => {
        console.error("Fetch error:", err)
      })
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    return (
      <Container className="mt-5 mb-3">
        <h2 className="text-white">The Alien Saga</h2>
        <Carousel indicators={false} data-bs-theme="dark" className="mt-3">
          <Carousel.Item>
            <Row>
              <Col>
                <SingleMovie movieCover={this.state.movies.slice(0, 6)} />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col>
                <SingleMovie movieCover={this.state.movies.slice(6, 12)} />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    )
  }
}

export default MovieCarouselSecond
