import React from "react";
import { profiles } from "../../data/ProjectData";
import "./About.css";

export default function About() {
  return (
    <div className="profiles-container">
      {profiles.map((profile, index) => (
        <div key={index} className="profile-card">
          <img
            src={profile.image}
            alt={profile.name}
            className="profile-pic"
          />
          <div className="profile-info">
            <h2 className="profile-name">{profile.name}</h2>
            <p className="profile-job">{profile.job}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
