import "./App.css"
import "./components/CustomNavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/SingleMovie.css"
import "./components/TvShows.css"
import CustomNavBar from "./components/CustomNavBar"
import Homepage from "./components/Homepage"
import MainMenu from "./components/MainMenu"
import CustomFooter from "./components/CustomFooter"
import TvShows from "./components/TvShows"
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
        </Routes>
        <CustomFooter />
      </BrowserRouter>
    </>
  )
}

export default App
