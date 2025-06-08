// src/pages/Projects.js
import React from 'react';
import './Projects.css'; // Import component-specific CSS

const projects = [
  {
    id: 1,
    title: "Enterprise Developer Portal Migration",
    description: "Led the migration of a high-traffic Developer Portal from Drupal 9 to Drupal 10, integrating Kubernetes for enhanced scalability and performance. Designed architectural documents for improved security (public/private instances) and streamlined API versioning workflows.",
    technologies: ["Drupal 9/10", "Kubernetes", "PostgreSQL", "Nginx", "APIGEE", "Azure Cloud"],
    impact: "Enhanced scalability, 20% reduction in user onboarding time, 90% reduction in API documentation creation time.",
    link: "#", // Replace with a link to a detailed project page or GitHub
  },
  {
    id: 2,
    title: "API Doc Versioning Module",
    description: "Designed and developed a custom Drupal module for automated API documentation versioning, integrated with Bitbucket and Gitlab. Utilized Drupal's Entity Types, Fields API, and Taxonomy for structured API references.",
    technologies: ["Drupal", "PHP", "Bitbucket", "Gitlab", "RESTful APIs"],
    impact: "Reduced API Doc creation time to 60 seconds, significantly improved developer experience.",
    link: "#",
  },
  {
    id: 3,
    title: "Acquia Hosted Drupal Rebuild",
    description: "Rebuilt and migrated AirClass websites to Drupal 7, hosted on Acquia Cloud Platform. Gained hands-on experience with Acquia Dev Desktop and managed Drupal sites in a cloud environment.",
    technologies: ["Drupal 7", "Acquia Cloud", "PHP"],
    impact: "Successfully transitioned sites to a managed cloud platform.",
    link: "#",
  },
  {
    id: 4,
    title: "Consent Management Platform Integration",
    description: "Integrated OneTrust's Consent Management Platform (CMP) to ensure compliance with GDPR and CCPA regulations. Automated Data Subject Access Request (DSAR) workflows.",
    technologies: ["OneTrust CMP", "GDPR", "CCPA", "JavaScript"],
    impact: "Achieved full compliance with major data privacy regulations.",
    link: "#",
  },
  {
    id: 5,
    title: "Drowsiness Detection Web App",
    description: "Developed a web application for drowsiness detection using Python, OpenCV, and Dlib, exploring real-time computer vision applications for safety enhancement.",
    technologies: ["Python", "Flask", "OpenCV", "Dlib", "WebRTC"],
    impact: "Demonstrated practical application of AI/ML in a safety context.",
    link: "https://github.com/YourGithub/Drowsiness-Detection", // Replace with actual GitHub link
  },
  // Add more projects based on your resume[span_0](end_span)
];

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                <span className="tech-label">Technologies: </span>
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="project-impact"><strong>Impact:</strong> {project.impact}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  Learn More &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
