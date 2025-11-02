import React from "react";
import {timelineData, games } from "../../data/AboutData";
import { profiles } from "../../data/ProjectData";
import "./About.css";
import teamlogo from "../../assets/images/Profile/logo.png";

export default function About() {
  return (
    <div className="container-background about-page">
      <section className="about-intro">
        <h1>About Us</h1>
        <p>
          Arda & Dillon started Catastrophe Studios on the 28th of February,
          2024. The first game we made together was Willy’s Wonderful Wonders
          for the Winter MelonJam 2023. This was our first game we worked on
          together.
          <br /> <br /> Near the end of 2024 we decided to start our own studio
          called Catastrophe Studios and start working on our story game called
          Blood Tied. Blood Tied was supposed to be a story game that you play
          with 2 people and commit crimes to build your own story by making the
          right or “wrong” choices. Eventually we realized that this game was
          out of our reach and the vision was too big for our team of 2.
          <br /> <br /> On the 2nd of February, 2025 we started working on
          Tribes. We saw this as a smaller project and the game we wanted as our
          first commercial Steam release. A strategy game to be played by
          everyone and adaptable to everyone's playstyles. Right now we have a
          team of 8 people working at Catastrophe Studios with amazing progress
          closing in on a full release in 2026.
        </p>
      </section>

      <section className="timeline-section">
        <div className="journey-header">
          <h2>Our Journey</h2>
        </div>
        <div className="timeline">
          {timelineData.map((event, index) => {
            const left = (index / (timelineData.length - 1)) * 100;
            const isAbove = index % 2 === 0;
            return (
              <div
                key={index}
                className={`timeline-item ${isAbove ? "above" : "below"}`}
                style={{ left: `${left}%` }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-info">
                  <h3>{event.year}</h3>
                  <p>{event.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="games-section">
        <div className="game-header">
          <h2>Game catalogue</h2>
        </div>
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
          <div className="team-logo">
            <img src={teamlogo} alt="Team Logo" className="team-logo-image" />
          </div>
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
