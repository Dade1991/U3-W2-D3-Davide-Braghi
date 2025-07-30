import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  // useNavigate è un altro hook di react-router-dom che si invoca
  // senza parametri e restituisce una funzione che in gergo si chiama "navigate"

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col className="text-center">
          <h3>404 - Not Found</h3>
          {/* <a href="/"><p>VAI IN HOMEPAGE</p></a> */}
          {/* questo link non è che non funzioni... ma scatena
          il classico "ricaricamento" del browser per chiedere
          al server un "nuovo" documento HTML che in realtà già
          possiede e l'utente potrebbe essere redirezionato in Home
          istantaneamente! */}
          <Link to="/">
            <p>VAI IN HOMEPAGE</p>
          </Link>
          {/* questo è un collegamento "furbo", fatto alla maniera
          di react-router-dom! */}
          <button
            className="btn btn-success"
            onClick={() => {
              // location.assign('/') // <-- funziona, ma provoca il ricaricamento
              // del browser... possiamo fare di meglio!
              navigate('/') // <-- in questo modo triggeriamo una navigazione
              // solo client-side, come con il componente Link
            }}
          >
            ANCHE DA QUI
          </button>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
