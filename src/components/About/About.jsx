import React from "react";
import { profiles } from "../../data/ProjectData";
import "./About.css";

export default function About() {
  return (
    <div className="container-background">
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
    </div>
  );
}
