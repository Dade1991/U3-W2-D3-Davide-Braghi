import { Navbar, Nav, Form } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const MyNavbar = () => {
  const location = useLocation()

  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#221f1f' }}>
      <Link className="navbar-brand" to="/">
        <img
          src="assets/logo.png"
          alt="logo"
          style={{ width: '100px', height: '55px' }}
        />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className="font-weight-bold nav-link active" to="/">
            Home
          </Link>
          <Link className="font-weight-bold nav-link" to="/tv-show">
            TV Shows
          </Link>
          <Nav.Link className="font-weight-bold" href="/">
            Movies
          </Nav.Link>
          <Nav.Link className="font-weight-bold" href="/">
            Recently Added
          </Nav.Link>
          <Nav.Link className="font-weight-bold" href="/">
            My List
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Form.Control
            placeholder={
              location.pathname === '/' ? 'Cerca film...' : 'Cerca tv-show...'
            }
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
