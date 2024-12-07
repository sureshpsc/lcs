import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa'; // For the up arrow icon

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle the visibility of the footer based on scroll position
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsVisible(true); // Show footer when reaching the bottom
    } else {
      setIsVisible(false); // Hide footer when scrolling away
    }
  };

  // Scroll the page to the top when the up arrow is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Footer */}
      {isVisible && (
        <footer className="footer bg-white text-center py-3 mt-auto">
          <Container>
            <Row>
              <Col>
                <p className="m-0">&copy; 2024 LCS Private Limited. All rights reserved.</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com" className="mx-2">LinkedIn</a>
                  <a href="https://twitter.com" className="mx-2">Twitter</a>
                  <a href="https://facebook.com" className="mx-2">Facebook</a>
                </div>
              </Col>
            </Row>
            {/* Scroll to Top Arrow */}
            <div className="scroll-to-top" onClick={scrollToTop}>
              <FaArrowUp size={30} />
            </div>
          </Container>
        </footer>
      )}
    </>
  );
};

export default Footer;
