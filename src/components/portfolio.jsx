import React from 'react';


const projects = [
  {
    title: 'SunsetSunriseTimes',
    imageUrl: '/src/assets/kwise.jpeg',
    link: 'https://github.com/garciajv86/SunsetSunriseTimes',
  },
  {
    title: 'Project 2',
    imageUrl: '/src/assets/kwise.jpeg',
    link: 'https://github.com/IvySMac/Project-2',
  },
  // Add more projects...
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.link} className="project-link">
            <img src={project.imageUrl} className='Kpic' alt={project.title} />
            <div className="project-title">{project.title}</div> 
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;