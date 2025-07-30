import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Error404 = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col className="text-center">
          <h3 className="error-404-message">404 - Not Found</h3>
          <Link to="/" className="text-decoration-none fw-bold">
            <p className="error-404-HomepageLink">Return to HOMEPAGE</p>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Error404
