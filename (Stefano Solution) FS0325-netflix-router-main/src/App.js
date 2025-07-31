import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './styles/styles.css'
import { Container, Alert, Dropdown } from 'react-bootstrap'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MovieList from './components/MovieList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import TvShow from './components/TvShow'
import MovieDetails from './components/MovieDetails'

const App = () => {
  const [gallery1, setGallery1] = useState([])
  const [gallery2, setGallery2] = useState([])
  const [gallery3, setGallery3] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const OMDB_URL = 'http://www.omdbapi.com/?apikey=24ad60e9'

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = () => {
    Promise.all([
      fetch(OMDB_URL + '&s=harry%20potter')
        .then((response) => response.json())
        .then((responseObject) => {
          if (responseObject.Response === 'True') {
            setGallery1(responseObject.Search)
          } else {
            setError(true)
          }
        }),
      fetch(OMDB_URL + '&s=avengers')
        .then((response) => response.json())
        .then((responseObject) => {
          if (responseObject.Response === 'True') {
            setGallery2(responseObject.Search)
          } else {
            setError(true)
          }
        }),
      fetch(OMDB_URL + '&s=star%20wars')
        .then((response) => response.json())
        .then((responseObject) => {
          if (responseObject.Response === 'True') {
            setGallery3(responseObject.Search)
          } else {
            setError(true)
          }
        }),
    ])
      .then(() => setLoading(false))
      .catch((err) => {
        setError(true)
        console.log('An error has occurred:', err)
      })
  }

  return (
    <BrowserRouter>
      <div>
        <MyNavbar />
        <Container fluid className="px-4">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  error={error}
                  loading={loading}
                  gallery1={gallery1}
                  gallery2={gallery2}
                  gallery3={gallery3}
                />
              }
            />
            <Route path="/tv-show" element={<TvShow />} />
            <Route element={<MovieDetails />} path="/movie-details/:movieId" />
          </Routes>
          <MyFooter />
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App
