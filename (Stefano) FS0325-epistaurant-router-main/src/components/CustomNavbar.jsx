// un componente React può essere una funzione o una classe
// il cui scopo è ritornare una porzione di JSX

// devo importare dalla libreria react-bootstrap i componenti che sono andato
// ad utilizzare per creare la mia navbar
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, useLocation } from 'react-router-dom'

// import { Container, Nav, Navbar } from 'react-bootstrap'

const CustomNavbar = (props) => {
  const location = useLocation()
  console.log('LOCATION', location)

  console.log('OGGETTOPROPS', props)
  return (
    <Navbar bg={props.tema} data-bs-theme={props.tema} expand="lg">
      <Container fluid={true}>
        <Link className="navbar-brand" to="/">
          Epistaurant
        </Link>
        {/* <Navbar.Brand href="#home">Epistaurant</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* devo confrontare il location.pathname corrente con
            /, /prenota, /admin etc. per capire A CHI dare la classe css "active" */}
            <Link
              className={
                location.pathname === '/' ? 'nav-link active' : 'nav-link'
              }
              to="/"
            >
              Home
            </Link>
            <Link
              className={
                location.pathname === '/prenota'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              to="/prenota"
            >
              Prenota
            </Link>
            <Link
              className={
                location.pathname === '/menu' ? 'nav-link active' : 'nav-link'
              }
              to="/menu"
            >
              Menu
            </Link>
            <Link
              className={
                'nav-link' + (location.pathname === '/admin' ? ' active' : '')
              }
              to="/admin"
            >
              Admin
            </Link>
            <Link
              className={
                'nav-link' +
                (location.pathname === '/lavora-con-noi' ? ' active' : '')
              }
              to="/lavora-con-noi"
            >
              Lavora con noi
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
