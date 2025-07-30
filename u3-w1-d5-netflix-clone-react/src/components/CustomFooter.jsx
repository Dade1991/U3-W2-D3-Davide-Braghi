import { Container, Row, Col, Button } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"

function CustomFooter() {
  return (
    <>
      <Container className="d-md-block mt-5">
        <Row className="px-5">
          <Col>
            <i className="bi bi-facebook text-secondary me-3"></i>
            <i className="bi bi-instagram text-secondary me-3"></i>
            <i className="bi bi-twitter-x text-secondary me-3"></i>
            <i className="bi bi-youtube text-secondary me-3"></i>
          </Col>
        </Row>
        <Row className="mt-2 px-5">
          <Col>
            <ListGroup>
              <ListGroup className="item text-secondary my-1">
                Audio and Subtitle
              </ListGroup>
              <ListGroup className="item text-secondary my-1">
                Media Center
              </ListGroup>
              <ListGroup className="item text-secondary my-1">
                Privacy
              </ListGroup>
              <ListGroup className="item text-secondary my-1">
                Contact us
              </ListGroup>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              <ListGroup className="item text-secondary my-1">
                Audio Description
              </ListGroup>
              <ListGroup className="item text-secondary my-1">
                Investor Relations
              </ListGroup>
              <ListGroup className="item text-secondary my-1">
                Legal Notice
              </ListGroup>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              <ListGroup className="item text-secondary my-1">
                Help Center
              </ListGroup>
              <ListGroup className="item text-secondary my-1">Jobs</ListGroup>
              <ListGroup className="item text-secondary my-1">
                Cookie Preferences
              </ListGroup>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              <ListGroup className="item text-secondary my-1">
                Gift Cards
              </ListGroup>
              <ListGroup className="item text-secondary my-1">
                Terms of Use
              </ListGroup>
              <ListGroup className="item text-secondary my-1">
                Corporate Information
              </ListGroup>
            </ListGroup>
          </Col>
        </Row>
        <Row className="mt-4 px-5">
          <Col>
            <Button
              variant="dark"
              className="border-1 border-secondary rounded-0 text-secondary"
            >
              Service Code
            </Button>
          </Col>
        </Row>
        <Row className="mt-4 px-5">
          <Col className="item text-secondary my-1">
            <p> &#169; 1997 - {new Date().getFullYear()} Netflix, Inc. </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default CustomFooter
