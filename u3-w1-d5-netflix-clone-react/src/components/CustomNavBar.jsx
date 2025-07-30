import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link, useLocation } from "react-router-dom"

function CustomNavBar() {
  const location = useLocation()
  console.log(`location`, location)

  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Link to="/">
          <img
            src="asset/logo.png"
            alt="Netflix Logo"
            className="netflixLogo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 d-flex justify-content-between align-items-center">
            <div className="d-flex flex-row">
              <Link
                className={
                  "text-decoration-none fw-bold text-light ms-3" +
                  (location.pathname === `/` ? ` active` : ``)
                }
                to="/"
              >
                Home
              </Link>
              <Link
                className={
                  "text-decoration-none fw-bold text-light ms-3" +
                  (location.pathname === `/TvShows` ? ` active` : ``)
                }
                to="TvShows"
              >
                TV Shows
              </Link>
              <Link
                className={
                  "text-decoration-none fw-bold text-light ms-3" +
                  (location.pathname === `/Movies` ? ` active` : ``)
                }
                to="/Movies"
              >
                Movies
              </Link>
              <Link
                className={
                  "text-decoration-none fw-bold text-light ms-3" +
                  (location.pathname === `/RecentlyAdded` ? ` active` : ``)
                }
                to="/RecentlyAdded"
              >
                Recently Added
              </Link>
              <Link
                className={
                  "text-decoration-none fw-bold text-light ms-3" +
                  (location.pathname === `/My List` ? ` active` : ``)
                }
                to="MyList"
              >
                My List
              </Link>
            </div>
            <div className="d-flex flex-row">
              <Nav.Link href="#" className="fw-bold text-light me-2">
                <i className="bi bi-search"></i>
              </Nav.Link>
              <Link
                className={
                  "text-decoration-none fw-bold text-light my-auto me-2" +
                  (location.pathname === `/KIDS` ? ` active` : ``)
                }
                to="/KIDS"
              >
                KIDS
              </Link>
              <Nav.Link href="#" className="fw-bold text-light me-2">
                <i className="bi bi-bell"></i>
              </Nav.Link>
              <Link
                className={
                  "text-decoration-none fw-bold text-light my-auto" +
                  (location.pathname === `/User` ? ` active` : ``)
                }
                to="User"
              >
                <i className="bi bi-person-circle"></i>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavBar
