import "bootstrap/dist/css/bootstrap.min.css"
import MovieCarouselFirst from "./MovieCarouselFirst"
import MovieCarouselSecond from "./MovieCarouselSecond"
import MovieCarouselThird from "./MovieCarouselThird"

function Homepage() {
  return (
    <>
      <MovieCarouselFirst />
      <MovieCarouselSecond />
      <MovieCarouselThird />
    </>
  )
}

export default Homepage
