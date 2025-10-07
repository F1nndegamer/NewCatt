import React from "react";
import './Intro.css';
import Profile from '../../assets/icons/Profile/profile.png';
export default function Intro() {
  return (
    <div className="intro-container">
      <img src={Profile} alt="Profile" />
    </div>
  );
}