import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <Container className="justify-content-start">
      <Row>
        <Col className="text-center">
          <h1>Resume</h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h3>
            Download my resume{" "}
            <a
              href="resume/PeteOottamakornResume.pdf"
              id="downloadLink"
              download
            >
              here
            </a>
          </h3>
        </Col>
      </Row>
      <Row>
        {/* <Col></Col> */}
        <Col md="auto">
          <h3>Front-End Proficiencies</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>jQuery</li>
            <li>Responsive design</li>
          </ul>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        {/* <Col></Col> */}
        <Col md="auto">
          <h3>Back-End Proficiencies</h3>
          <ul>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
            <li>Sequelize</li>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
          </ul>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
