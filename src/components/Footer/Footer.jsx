import React from "react";
import { FaYoutube, FaDiscord, FaTiktok, FaInstagram, FaPatreon } from "react-icons/fa";
import { FaWikipediaW } from "react-icons/fa";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer px-8 py-12">
      <p className="text-center italic mb-6">"Quote here"</p>
      <div className="flex justify-center space-x-6 text-xl">
         <a href="https://www.youtube.com/@CatastropheStudiosAC" target="_blank"><FaYoutube /></a>
                <a href="https://www.discord.gg/twbPKAHRNy" target="_blank"><FaDiscord /></a>
                <a href="https://www.tiktok.com/@tribesgame" target="_blank"><FaTiktok /></a>
                <a href="https://www.instagram.com/tribesgame/" target="_blank"><FaInstagram /></a>
                <a href="https://www.patreon.com/CatastropheStudiosDEV" target="_blank"><FaPatreon /></a>
      </div>
      <p className="text-center text-sm mt-6">©Catastrophe Studios</p>
    </footer>
  );
}
