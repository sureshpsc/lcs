import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap'; // Using react-bootstrap components for layout and styling

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <Container>
          <Row className="text-center">
            <Col>
              <h1>Welcome to LCS Private Limited</h1>
              <p>Your trusted partner in IT Technology and Solutions</p>
              <div className="cta-buttons">
                <Link to="/about">
                  <Button variant="primary" size="lg" className="cta-button">Learn More About Us</Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline-light" size="lg" className="cta-button">Explore Our Services</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* About Us Section */}
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <h2>About Us</h2>
            <p>
              LCS Private Limited was founded with the mission to provide expert consultancy services in IT Technology and Solutions. We bring innovative and sustainable solutions to the forefront of every business we engage with.
            </p>
          </Col>
          <Col md={6}>
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower businesses by providing comprehensive and customized consultancy services that drive efficiency, innovation, and sustainability.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Why Choose Us Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Why Choose Us</h2>
        <Row>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Expertise</Card.Title>
                <Card.Text>
                  Our team of highly skilled professionals brings years of experience to deliver the best solutions for your business.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Innovation</Card.Title>
                <Card.Text>
                  We prioritize innovative approaches to solve complex challenges, ensuring your business remains competitive and forward-thinking.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Customer Focus</Card.Title>
                <Card.Text>
                  We understand your unique business needs and provide tailored solutions to ensure long-term success and sustainability.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Our Services Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>IT Consulting</Card.Title>
                <Card.Text>
                  We offer expert IT consulting services to help your business integrate the latest technologies efficiently.
                </Card.Text>
                <Link to="/services" className="btn btn-primary">Read More</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Cloud Solutions</Card.Title>
                <Card.Text>
                  Transform your business operations with secure, scalable cloud solutions that drive growth and flexibility.
                </Card.Text>
                <Link to="/services" className="btn btn-primary">Read More</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Process Optimization</Card.Title>
                <Card.Text>
                  Streamline your business operations with data-driven process optimization strategies that enhance efficiency.
                </Card.Text>
                <Link to="/services" className="btn btn-primary">Read More</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      {/* <Container className="my-5">
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <Carousel>
          <Carousel.Item>
            <p>"LCS provided us with outstanding IT solutions that helped improve our operational efficiency. We highly recommend their services!"</p>
          </Carousel.Item>
          <Carousel.Item>
            <p>"Their cloud solutions have transformed the way we operate. Our business is more agile and competitive than ever before."</p>
          </Carousel.Item>
        </Carousel>
      </Container> */}
    </div>
  );
};

export default HomePage;
