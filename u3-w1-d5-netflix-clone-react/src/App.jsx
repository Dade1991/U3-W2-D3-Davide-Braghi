import "./App.css"
import "./components/CustomNavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/SingleMovie.css"
import "./components/TvShows.css"
import "./components/Error404.css"
import CustomNavBar from "./components/CustomNavBar"
import Homepage from "./components/Homepage"
import MainMenu from "./components/MainMenu"
import MovieDetails from "./components/MovieDetails"
import CustomFooter from "./components/CustomFooter"
import TvShows from "./components/TvShows"
import Error404 from "./components/Error404"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavBar />
        <MainMenu />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/TvShows" element={<TvShows />} />
          <Route path="/MovieDetails/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <CustomFooter />
      </BrowserRouter>
    </>
  )
}

export default App
