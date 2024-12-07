import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap'; // Importing necessary React Bootstrap components

const AboutPage = () => {
  return (
    <Container className="my-5 main-content"> {/* Added class main-content for margin-bottom */}
      <h2 className="text-center mb-4">About Us</h2>
      
      {/* About Us Section */}
      <Row className="mb-5">
        <Col md={6}>
          <h3 className="text-primary">Our Story</h3>
          <p>
            LCS was founded with the vision to provide expert consultancy services in IT Technology and the Chemical Industry. Over the years, we have helped businesses achieve their goals through innovative and sustainable solutions.
          </p>
        </Col>
        <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/ourstory.jpg"  // Correct path to local image
                alt="Our Story"
                style={{ objectFit: 'cover', height: '400px' }}  // Ensuring the image covers the container area
              />
              <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                <h3>Our Story</h3>
                <p>LCS was founded with the vision to provide expert consultancy services in IT Technology and the Chemical Industry.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Our Mission Section */}
      <Row className="mb-5">
        <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/ourmission.jpg"  // Replace with local mission image
                alt="Our Mission"
                style={{ objectFit: 'cover', height: '400px' }} // Ensuring the image fits well
              />
              <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                <h3>Our Mission</h3>
                <p>Our mission is to empower businesses by providing comprehensive and customized consultancy services that drive efficiency, innovation, and sustainability.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6}>
          <h3 className="text-primary">Our Mission</h3>
          <p>
            Our mission is to empower businesses by providing comprehensive and customized consultancy services that drive efficiency, innovation, and sustainability.
          </p>
        </Col>
      </Row>

      {/* Our Team Section */}
      <Row>
        <Col md={6}>
          <h3 className="text-primary">Our Team</h3>
          <p>
            We are a team of experienced professionals dedicated to delivering exceptional consultancy services. Our experts have a deep understanding of the IT and Chemical sectors, ensuring we provide solutions that are both practical and forward-thinking.
          </p>
        </Col>
        <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/ourteam.jpg"  // Replace with local team image
                alt="Our Team"
                style={{ objectFit: 'cover', height: '400px' }}  // Ensuring the image fits properly
              />
              <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                <h3>Our Team</h3>
                <p>We are a team of experienced professionals dedicated to delivering exceptional consultancy services.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
