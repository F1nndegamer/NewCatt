import React from "react";
import {timelineData, games } from "../../data/AboutData";
import { profiles } from "../../data/ProjectData";
import "./About.css";

export default function About() {
  return (
    <div className="container-background about-page">
      <section className="about-intro">
        <h1>About Us</h1>
        <p>
          We’re a small indie studio passionate about crafting meaningful
          experiences through games that blend creativity, emotion, and fun.
        </p>
      </section>

      <section className="timeline-section">
        <h2>Our Journey</h2>
        <div className="timeline">
          {timelineData.map((event, index) => (
            <div
              key={index}
              className="timeline-item"
              style={{ left: `${event.position}%` }}
            >
              <div className="timeline-dot" />
              <div className="timeline-info">
                <h3>{event.year}</h3>
                <p>{event.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="games-section">
        <h2>Games We Made</h2>
        <div className="games-grid">
          {games.map((game, index) => (
            <div key={index} className="game-card">
              <img src={game.image} alt={game.name} className="game-image" />
              <h3>{game.name}</h3>
              <p>{game.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <div className="profiles-container">
          <div className="team-header">
            <h2>Meet our team</h2>
          </div>
          {profiles.map((profile, index) => (
            <div key={index} className="profile-card">
              <img
                src={profile.image}
                alt={profile.name}
                className="profile-pic"
              />
              <div className="profile-info">
                <div className="profile-text">
                  <h2 className="profile-name">{profile.name}</h2>
                  <p className="profile-job">{profile.job}</p>
                </div>
                <p className="profile-description">{profile.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
