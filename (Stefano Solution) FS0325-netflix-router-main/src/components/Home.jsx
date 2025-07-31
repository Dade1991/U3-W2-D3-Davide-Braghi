import { Dropdown, Alert } from 'react-bootstrap'
import MovieList from './MovieList'

const Home = ({ error, loading, gallery1, gallery2, gallery3 }) => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">Films</h2>
          <div className="ms-4 mt-1">
            <Dropdown>
              <Dropdown.Toggle
                style={{ backgroundColor: '#221f1f' }}
                id="dropdownMenuButton"
                className="btn-secondary btn-sm dropdown-toggle rounded-0"
              >
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu bg="dark">
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div>
          <i className="fa fa-th-large icons"></i>
          <i className="fa fa-th icons"></i>
        </div>
      </div>
      {error && (
        <Alert variant="danger" className="text-center">
          An error has occurred, please try again!
        </Alert>
      )}
      {!error && (
        <>
          <MovieList
            title="Harry Potter"
            loading={loading}
            movies={gallery1.slice(0, 6)}
          />
          <MovieList
            title="Lord of the Rings"
            loading={loading}
            movies={gallery2.slice(0, 6)}
          />
          <MovieList
            title="Star Wars"
            loading={loading}
            movies={gallery3.slice(0, 6)}
          />
        </>
      )}
    </>
  )
}

export default Home
