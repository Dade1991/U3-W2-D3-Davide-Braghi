import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Dropdown from "react-bootstrap/Dropdown"

function MainMenu() {
  return (
    <>
      <Navbar className="bg-dark">
        <Container>
          <div className="d-flex align-items-center">
            <Navbar.Brand href="#" className="fw-bold text-light ms-2">
              TV Shows
            </Navbar.Brand>
            <Dropdown className="">
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu dropdown-menu-dark">
                <Dropdown.Item href="#/action-1">Warhammer 40k</Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Pirates of the Caribbean
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Lord of the Ring
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Navbar.Brand href="#" className="fw-bold text-light ms-2">
              <i className="bi bi-grid"></i>
            </Navbar.Brand>
            <Navbar.Brand href="#" className="fw-bold text-light ms-2">
              <i className="bi bi-grid-3x3-gap"></i>
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default MainMenu
