import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container} from 'react-bootstrap'; // Importing components from react-bootstrap
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactUsPage from './components/ContactUsPage';
import Header from './components/Header'; // Import Header component
import Footer from './components/Footer'; // Import Footer component
import './assets/style.css'; // Custom global CSS for general adjustments
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
