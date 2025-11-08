import React, { useEffect, useState } from "react";
import "./Header.css";
import "./HeaderMobile.css";
import {
  FaYoutube,
  FaDiscord,
  FaTiktok,
  FaInstagram,
  FaPatreon,
} from "react-icons/fa";

export default function Header() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    setActive(window.scrollY > 1100); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${active ? "header-active" : ""}`}>
      <div className="header-left">
        <a href="#">
          <h1>Catastrophe Studios</h1>
        </a>
      </div>

      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#tribes">Tribes</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="social-links">
        <a href="https://www.youtube.com/@CatastropheStudiosAC" target="_blank">
          <FaYoutube />
        </a>
        <a href="https://www.discord.gg/twbPKAHRNy" target="_blank">
          <FaDiscord />
        </a>
        <a href="https://www.tiktok.com/@tribesgame" target="_blank">
          <FaTiktok />
        </a>
        <a href="https://www.instagram.com/tribesgame/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.patreon.com/CatastropheStudiosDEV" target="_blank">
          <FaPatreon />
        </a>
      </div>
    </header>
  );
}
