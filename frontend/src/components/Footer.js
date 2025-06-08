// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import component-specific CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Sameer Kumar Choudhary. All rights reserved.</p>
        <div className="social-links">
          {/* Add links to LinkedIn, GitHub, etc. */}
          <a href="https://linkedin.com/in/sameerkumar" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          <a href="https://github.com/sameerkumar" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
