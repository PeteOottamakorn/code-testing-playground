import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid id="footer">
      <Row>
        <Col className="text-center">
          <Link to="https://github.com/PeteOottamakorn">
            <Image id="social-icons" fluid src="images/icons/Github.png" />
          </Link>{" "}
          <Link to="https://www.linkedin.com/in/poottamakorn/">
            <Image id="social-icons" fluid src="images/icons/LinkedIN.png" />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h5>©Copyright 2024. Made by Pete Oottamakorn</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
