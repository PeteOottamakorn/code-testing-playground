import { Container, Row, Col } from "react-bootstrap";
import Project from "../components/Project";

export default function Portfolio() {
  return (
    <Container className="container pt-4">
      <Row>
        <Col></Col>
        <Col className="text-center" md="auto">
          <h1>Portfolio</h1>
        </Col>
        <Col></Col>
      </Row>
      <Project />
    </Container>
  );
}
