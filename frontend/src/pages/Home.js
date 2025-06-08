// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import component-specific CSS

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Sameer Kumar Choudhary
        </h1>
        <p className="hero-subtitle">
          Senior Web Application Architect | Drupal & Cloud Specialist
        </p>
        <p className="hero-description">
          Architecting robust, scalable web solutions with a focus on Drupal, cloud platforms, and innovative technologies.
          Bringing 9+ years of leadership in delivering high-performance, secure, and maintainable systems.
        </p>
        <Link
          to="/projects"
          className="hero-button"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}

export default Home;
