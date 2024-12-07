import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const ContactUsPage = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Row className="justify-content-center">
        {/* Contact Info Section */}
        <Col md={6} xs={12} className="mb-4">
          <Card className="contact-card">
            <Card.Body>
              <h4>Get in Touch</h4>
              <p>If you have any questions or need further information, feel free to reach out to us.</p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:contact@lcsprime.com" className="text-decoration-none">
                  contact@lcsprime.com
                </a>
              </p>
              <p>
                <strong>Address:</strong> Hyderabad, India
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Form Section */}
        <Col md={6} xs={12}>
          <Card className="contact-card">
            <Card.Body>
              <h4>Send Us a Message</h4>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Your message" required />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsPage;
