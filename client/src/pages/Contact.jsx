import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  //Handle submission of contact email
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //Code to call API and send email will go here
      emailjs
        .sendForm("service_20lzqgk", "template_o7xbnxr", form.current, {
          publicKey: "ja4xfwB-Ds2wMT4ix",
        })
        .then(
          () => {
            console.log(`Email sent!`);
          },
          (error) => {
            console.log(`Email failed...`, error.text);
          }
        );
      //Clears out the input fields upon successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  //Updates form with input
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container className="container pt-4">
      <Row>
        <Col></Col>
        <Col className="text-center" md="auto">
          <h1>Contact</h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md={6}>
          <Form ref={form} onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="from_name"
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={5}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Button variant="light" type="submit" className="contact-submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
