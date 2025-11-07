import React from "react";
import {
  FaYoutube,
  FaDiscord,
  FaTiktok,
  FaInstagram,
  FaPatreon,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer px-8 py-12">
      <p className="text-center italic mb-6">"Quote here"</p>
      <div className="socials">
        <a href="...">
          <FaYoutube />
        </a>
        <a href="...">
          <FaDiscord />
        </a>
        <a href="...">
          <FaTiktok />
        </a>
        <a href="...">
          <FaInstagram />
        </a>
        <a href="...">
          <FaPatreon />
        </a>
      </div>
      <p className="text-center text-sm mt-6">©Catastrophe Studios</p>
    </footer>
  );
}
