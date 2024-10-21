// Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1b1b1b',
      color: 'white',
      padding: '30px 20px',
      textAlign: 'center',
      position: 'relative',
      bottom: '0',
      width: '100%',
      borderTop: '5px solid #f0ad4e', // Highlight with accent color
      fontFamily: 'Arial, sans-serif'
    }}>
      <ScrollAnimation animateIn="fadeIn" delay={300} duration={2}></ScrollAnimation>
      <div className="container">
        {/* Row with 3 Columns */}
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5>About Bearista Shop</h5>
            <p>Our mission is to bring you the best coffee experience in town, brewed fresh with love.</p>
          </div>
          
          {/* Quick Links Section */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li><a href="#home" style={{ textDecoration: 'none', color: '#f0ad4e' }}>Home</a></li>
              <li><a href="#menu" style={{ textDecoration: 'none', color: '#f0ad4e' }}>Menu</a></li>
              <li><a href="#about" style={{ textDecoration: 'none', color: '#f0ad4e' }}>About Us</a></li>
              <li><a href="#contact" style={{ textDecoration: 'none', color: '#f0ad4e' }}>Contact</a></li>
            </ul>
          </div>
          
          {/* Social Media Section */}
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
              <a href="" style={{ color: 'white' }}>
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" style={{ color: 'white' }}>
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" style={{ color: 'white' }}>
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="#" style={{ color: 'white' }}>
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{ borderTop: '1px solid #464646', paddingTop: '10px', marginTop: '20px' }}>
          <p>&copy; 2024 Bearista Shop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
