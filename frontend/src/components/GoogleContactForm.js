// src/components/GoogleContactForm.js
import React from 'react';
import './GoogleContactForm.css'; // Import component-specific CSS

function GoogleContactForm() {
  // **IMPORTANT**: Replace this with the actual embed URL from YOUR Google Form
  const googleFormEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLScLI2-gpb3vHfjPCsHG1qRpjgVmWhAe-Oh3iztMkVFZWkCWVA/viewform?embedded=true";

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-description">
          Have a project idea, a question, or just want to connect? Fill out the form below, and I'll get back to you as soon as possible!
        </p>
        <div className="form-embed-wrapper">
          <iframe
            src={googleFormEmbedUrl}
            width="100%"
            height="800" // Adjust height as needed for the form content
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Contact Form"
            className="google-form-iframe"
          >
            Loading...
          </iframe>
        </div>
      </div>
    </section>
  );
}

export default GoogleContactForm;
