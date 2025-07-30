// questo sarà il menu del nostro ristorante
// prenderemo tutte le paste
import { Col, Container, Row, Card, Button, Badge } from 'react-bootstrap'
import pastasciutte from '../data/menu.json'
// le mapperemo in JSX e creeremo una card per ciascuna
// importo l'hook useNavigate
import { useNavigate } from 'react-router-dom'

const Menu = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          {pastasciutte.map((pasta) => {
            return (
              <Card key={pasta.id} className="mt-3">
                <Card.Img variant="top" src={pasta.image} />
                <Card.Body>
                  <Card.Title>{pasta.name}</Card.Title>
                  <Card.Text>{pasta.description}</Card.Text>
                  <Card.Text>
                    <Badge bg="info">{pasta.price}€</Badge>
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      // devo andare sulla rotta "/details"
                      navigate('/details/' + pasta.id)
                      //   questi bottoni portano tutti a percorsi leggermente diversi
                      // es. /details/0, /details/1 etc.
                      // in App.jsx catturo TUTTE le possibili varianti di questi percorsi
                      // con una rotta "parametrica" fatta così: path="/details/:pastaid"
                    }}
                  >
                    Vai ai dettagli!
                  </Button>
                </Card.Body>
              </Card>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default Menu
