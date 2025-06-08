// src/pages/Contact.js
import React from 'react';
import GoogleContactForm from '../components/GoogleContactForm';
import './Contact.css'; // Import component-specific CSS

function Contact() {
  return (
    <div className="contact-page">
      <GoogleContactForm />
    </div>
  );
}

export default Contact;
