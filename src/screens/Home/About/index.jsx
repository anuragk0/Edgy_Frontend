import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <div className="about-photo-bio">

        <p className="about-bio">
          Hi! I'm Anurag, a passionate Computer Science student at IIIT Vadodara. I enjoy solving problems, building web apps, and competing in coding contests.
        </p>
      </div>
      <div className="about-section">
        <div className="about-row">
          <span className="about-label">Email:</span>
          <a className="about-link" href="mailto:anuragk0819@gmail.com">anuragk0819@gmail.com</a>
        </div>
        <div className="about-row">
          <span className="about-label">LinkedIn:</span>
          <a className="about-link" href="https://www.linkedin.com/in/anurag-kumar-0a2002227" target="_blank" rel="noopener noreferrer">linkedin.com/in/anurag-kumar-0a2002227</a>
        </div>
        <div className="about-row">
          <span className="about-label">GitHub:</span>
          <a className="about-link" href="https://github.com/anuragk0" target="_blank" rel="noopener noreferrer">github.com/anuragk0</a>
        </div>
        <div className="about-row">
          <span className="about-label">LeetCode:</span>
          <a className="about-link" href="https://leetcode.com/anuragk0" target="_blank" rel="noopener noreferrer">leetcode.com/anuragk0</a>
        </div>
        <div className="about-row">
          <span className="about-label">Codeforces:</span>
          <a className="about-link" href="https://codeforces.com/profile/clown0" target="_blank" rel="noopener noreferrer">codeforces.com/profile/clown0</a>
        </div>
        <div className="about-row">
          <span className="about-label">CodeChef:</span>
          <a className="about-link" href="https://codechef.com/users/anuragk0" target="_blank" rel="noopener noreferrer">codechef.com/users/anuragk0</a>
        </div>
      </div>
      <div className="about-section">
        <h3 className="about-subtitle">Education</h3>
        <div className="about-row">
          <span className="about-label">Institute:</span>
          <span className="about-value">Indian Institute of Information Technology Vadodara</span>
        </div>
        <div className="about-row">
          <span className="about-label">Degree:</span>
          <span className="about-value">Bachelor of Technology in Computer Science Engineering</span>
        </div>
        <div className="about-row">
          <span className="about-label">Graduating Year:</span>
          <span className="about-value">2026</span>
        </div>
      </div>
    </div>
  );
};

export default About;
