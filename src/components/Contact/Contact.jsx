import React, { useState } from "react";
import { Mail, MessageSquare, Bug, Users } from "lucide-react";
import "./Contact.css";

export default function Contact({
  links = {
    publisher: "mailto:publisher@example.com",
    suggestions: "mailto:suggestions@example.com",
    bugs: "mailto:bugs@example.com",
    join: "/careers",
  },
}) {
  const items = [
    {
      id: "publisher",
      label: "Contact Publisher",
      text: "Get in touch with our publishing team for media or business inquiries.",
      href: links.publisher,
      icon: Mail,
    },
    {
      id: "suggestions",
      label: "Suggestions",
      text: "Share your ideas and feedback to help us improve.",
      href: links.suggestions,
      icon: MessageSquare,
    },
    {
      id: "bugs",
      label: "Bug Reports",
      text: "Report any issues or technical problems you encounter.",
      href: links.bugs,
      icon: Bug,
    },
  ];

  const [active, setActive] = useState(items[0].id);

  return (
    <section className="contact-container" id="contact">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-cards">
        {items.map((it) => {
          const Icon = it.icon;
          const isActive = active === it.id;

          return (
            <div
              key={it.id}
              className={`contact-card ${isActive ? "active" : ""}`}
              onClick={() => setActive(it.id)}
            >
              <div className="contact-icon">
                <Icon size={32} />
              </div>
              {isActive && (
                <div className="contact-info">
                  <h3>{it.label}</h3>
                  <p>{it.text}</p>
                  <a href={it.href} className="contact-button">
                    Contact
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="join-section">
        <a href={links.join} className="join-button">
          <Users size={18} />
          <span>Join Our Team</span>
        </a>
      </div>
    </section>
  );
}
