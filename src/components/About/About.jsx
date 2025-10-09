import React from "react";
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="about-title">Meet our team!!!!!!!!!!!!!!</h2>

      <div className="about-section">
        <h3 className="about-subtitle">Brief History</h3>
        <p className="about-text">...</p>
      </div>

      <div className="about-section">
        <h3 className="about-subtitle">Small Introduction</h3>
        <p className="about-text">...</p>
      </div>

      <div className="about-section">
        <h3 className="about-subtitle">Games We Made</h3>
        <ul className="about-list">
          <li>...</li>
        </ul>
      </div>

      <div className="about-section">
        <h3 className="about-subtitle">Team Introduction</h3>
        <div className="team-grid">
          <div className="team-member">
            <img src="/team1.jpg" alt="Team Member" className="avatar" />
            <p className="member-name">Name</p>
            <p className="member-role">Role</p>
          </div>
        </div>
      </div>
    </section>
  );
}
