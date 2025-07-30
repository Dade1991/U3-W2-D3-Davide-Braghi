import "bootstrap/dist/css/bootstrap.min.css"
import MovieCarouselFirst from "./MovieCarouselFirst"
import MovieCarouselSecond from "./MovieCarouselSecond"
import MovieCarouselThird from "./MovieCarouselThird"

function TvShows() {
  return (
    <>
      <h1 className="section-Title text-center text-light">TV SHOW SECTION</h1>
      <MovieCarouselFirst />
      <MovieCarouselSecond />
      <MovieCarouselThird />
    </>
  )
}

export default TvShows
