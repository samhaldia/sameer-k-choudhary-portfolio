// src/pages/About.js
import React from 'react';
import './About.css'; // Import component-specific CSS

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-paragraph">
            I'm a highly motivated Senior Web Application Architect & Consultant with over 9 years of experience, specializing in architecting and delivering robust, scalable Drupal solutions, including significant expertise with Acquia Cloud.
          </p>
          <p className="about-paragraph">
            My passion lies in designing and implementing high-performance web applications, developing RESTful APIs, and applying strong DevOps practices (Docker, Git). I possess a solid foundation in cloud computing (Azure, with a strong understanding of AWS-related concepts like CDN and traffic routing) and a drive for building secure, resilient, and compliant systems.
          </p>
          <h3 className="sub-title">Key Strengths:</h3>
          <ul className="strengths-list">
            <li>Leading the design, delivery, and ongoing management of enterprise-tier digital solutions.</li>
            <li>Deep experience building, leading, and architecting Drupal applications, especially on cloud platforms like Acquia.</li>
            <li>Proficiency in PHP, JavaScript, and Python with a strong focus on DevSecOps.</li>
            <li>Proven ability to manage complex integrations and ensure digital compliance (GDPR, CCPA, OneTrust).</li>
            <li>Mentoring teams and fostering cross-functional collaboration in agile environments.</li>
          </ul>
          <h3 className="sub-title">What I Bring:</h3>
          <p className="about-paragraph">
            My journey has equipped me with the skills to oversee large-scale digital transformations, from initial concept and architectural design to secure deployment and ongoing optimization. I thrive on solving complex technical challenges and translating business needs into effective, innovative solutions.
          </p>
          <h3 className="sub-title">Technologies I'm Proficient In:</h3>
          <div className="skills-grid">
            <span className="skill-tag skill-drupal">Drupal (7-10)</span>
            <span className="skill-tag skill-acquia">Acquia Cloud</span>
            <span className="skill-tag skill-aws">AWS (Concepts)</span>
            <span className="skill-tag skill-azure">Azure Cloud</span>
            <span className="skill-tag skill-php">PHP</span>
            <span className="skill-tag skill-react">React.js</span>
            <span className="skill-tag skill-python">Python (Flask/Django)</span>
            <span className="skill-tag skill-devops">DevOps (Docker, Git, CI/CD)</span>
            <span className="skill-tag skill-sql">SQL (MySQL, PostgreSQL)</span>
            <span className="skill-tag skill-kubernetes">Kubernetes (Concepts)</span>
            <span className="skill-tag skill-compliance">GDPR/CCPA Compliance</span>
            <span className="skill-tag skill-onetrust">OneTrust</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
