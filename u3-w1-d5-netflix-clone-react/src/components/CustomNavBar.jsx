import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

function CustomNavBar() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="asset/logo.png"
            alt="Netflix Logo"
            className="netflixLogo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 d-flex justify-content-between align-items-center">
            <div className="d-flex flex-row">
              <Nav.Link href="#" className="fw-bold text-light">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold text-light">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold text-light">
                Movies
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold text-light">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold text-light">
                My List
              </Nav.Link>
            </div>
            <div className="d-flex flex-row">
              <Nav.Link href="#" className="fw-bold text-light">
                <i className="bi bi-search"></i>
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold text-light">
                KIDS
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold text-light">
                <i className="bi bi-bell"></i>
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold text-light">
                <i className="bi bi-person-circle"></i>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavBar
