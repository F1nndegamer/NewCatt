import React from "react";
import { FaYoutube, FaDiscord, FaTiktok, FaInstagram, FaPatreon } from "react-icons/fa";
import { FaWikipediaW } from "react-icons/fa";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer px-8 py-12">
      <p className="text-center italic mb-6">"Quote here"</p>
      <div className="flex justify-center space-x-6 text-xl">
        <a href="#" className="hover:text-red-500"><FaYoutube /></a>
        <a href="#" className="hover:text-indigo-400"><FaDiscord /></a>
        <a href="#" className="hover:text-pink-500"><FaTiktok /></a>
        <a href="#" className="hover:text-gray-300"><FaWikipediaW /></a>
        <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
        <a href="#" className="hover:text-orange-400"><FaPatreon /></a>
      </div>
      <p className="text-center text-sm mt-6">© Catastrophy Studios</p>
    </footer>
  );
}
