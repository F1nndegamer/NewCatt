import React from "react";
import './Contact.css';
export default function ContactUs() {
  return (
    <section id="contact" className="contact">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <div className="space-y-6">
        <a href="#" className="block text-blue-500 hover:underline">Publisher Contact</a>
        <a href="#" className="block text-blue-500 hover:underline">Suggestions</a>
        <a href="#" className="block text-blue-500 hover:underline">Bug Reports</a>
        <a href="#" className="block text-blue-500 hover:underline">Join Our Team</a>
      </div>
    </section>
  );
}
