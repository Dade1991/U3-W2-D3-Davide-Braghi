// questo componente servirà a mostrare i dettagli della pasta
// selezionata e verrà montato su una nuova rotta

import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import PastaReviews from './PastaReviews'
import pastasciutte from '../data/menu.json'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

// ora PastaDetails si monta su tutti i percorsi possibili delle card generate
// da Menu.jsx, e questi percorsi simili ma diversi trasportano nell'URL l'id
// della pasta da mostrare

const PastaDetails = () => {
  const params = useParams()
  // params è un oggetto che colleziona TUTTI i parametri nell'URL
  console.log('PARAMS', params)
  // params.pastaid sarà (hopefully) un id valido per una pasta, la recupereremo
  // dal JSON e ne mostreremo tutti i dettagli nella card!

  // uso useNavigate per rendere cliccabile il pulsante che deve riportare in home
  const navigate = useNavigate()
  const [pasta, setPasta] = useState({})

  // abbiamo comunque bisogno di uno useEffect modellato come un "componentDidMount"
  useEffect(() => {
    // qui dentro, grazie a params.pastaid cerco una corrispondente
    // pasta nell'array pastasciutte
    const foundPasta = pastasciutte.find((singlePasta) => {
      // singlePasta è uno degli oggetti contenuti in pastasciutte
      return params.pastaid === singlePasta.id.toString()
    })
    console.log('FOUNDPASTA', foundPasta)
    // il metodo .find() su un array cerca di far ritornare true
    // dal suo valore di ritorno
    // nel caso ci riesca, ci ritornerà l'intero elemento dell'array
    // che ha soddisfatto la condizione
    // in caso torni false da OGNI elemento dell'array, il metodo
    // find ritorna "undefined"
    // quindi dobbiamo DISTINGUERE le situazioni: se la pasta è stata trovata
    // riempiremo la card!
    // se foundPasta è undefined vuol dire che qualcuno ci ha messo lo zampino
    // e ha provato a cercare una pasta inesistente -> lo portiamo alla pagina 404
    if (foundPasta) {
      // la pasta è stata trovata!
      setPasta(foundPasta) // metto la pasta trovata nello stato del componente
    } else {
      // la pasta cercata non esiste!
      navigate('/404')
    }
  }, [])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <Card>
            <Card.Img variant="top" src={pasta.image} />
            <Card.Body>
              <Card.Title>{pasta.name}</Card.Title>
              <Card.Text>{pasta.description}</Card.Text>
              <Card.Text>{pasta.price}€</Card.Text>
              {/* qua inserisco il rendering di PastaReviews però ad una condizione:
              che pasta.comments NON sia undefined. Questo serve per evitare
              che al PRIMO render, quello in cui pasta è {} PastaReviews
              provi a fare il map di un array che non esiste */}
              {pasta.comments && <PastaReviews pastaAttiva={pasta} />}
              {/* in questo modo sappiamo che pasta non è più { } */}
              <Button
                variant="primary"
                className="mt-3"
                onClick={() => {
                  navigate('/')
                }}
              >
                Torna in Home
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PastaDetails
