import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Using react-bootstrap components for layout and styling
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Hero Section without background image */}
      <div className="services-hero-section text-center" style={{ padding: '50px 0', color: '#333' }}>
        <Container>
          <h1>Our Services</h1>
          <p>Explore how our IT consulting, cloud solutions, and process optimization services can help your business grow and thrive in the digital age.</p>
        </Container>
      </div>

      {/* IT Technology Consulting Section */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h3>IT Technology Consulting</h3>
            <p>We offer IT consulting services designed to help your business thrive in the digital age. From system integration to cybersecurity, our experts are here to help you streamline your operations and improve your infrastructure.</p>
          </Col>
          <Col md={6}>
            <img src="/images/it-consulting.jpg" alt="IT Consulting" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>

      {/* Cloud Solutions Section */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h3>Cloud Solutions</h3>
            <p>Transform your business operations with secure, scalable cloud solutions that drive growth and flexibility. Whether it's infrastructure-as-a-service or software-as-a-service, we have a solution for you.</p>
          </Col>
          <Col md={6}>
            <img src="/images/cloud-solutions.jpg" alt="Cloud Solutions" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>

      {/* Process Optimization Section */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h3>Process Optimization</h3>
            <p>We provide expert advice on process optimization, regulatory compliance, and safety protocols to ensure your business operates efficiently and in compliance with industry standards.</p>
          </Col>
          <Col md={6}>
            <img src="/images/process-optimization.jpg" alt="Process Optimization" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>

      {/* Call to Action Section */}
      <div className="cta-section text-center my-5" style={{ backgroundColor: '#f8f9fa', padding: '3rem' }}>
        <h3>Ready to Take Your Business to the Next Level?</h3>
        <p>Contact us today to learn how our services can help you achieve your business goals.</p>
        {/* Replace href with Link component */}
        <Link to="/contact">
          <Button variant="primary">Contact Us</Button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage;
