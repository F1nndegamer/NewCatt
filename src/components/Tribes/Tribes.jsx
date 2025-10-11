import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Tribes.css";

export default function Tribes() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const imgs = importAll(
      require.context(
        "../../assets/images/Screenshots",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );
    setImages(imgs);
  }, []);

  return (
    <div className="tribes">
      <h1 className="tribes-title">TRIBES</h1>
      <div className="slideshow-container">
        <div className="slideshow">
          {images.concat(images).map((src, index) => (
            <img key={index} src={src} alt={`tribe-${index}`} />
          ))}
        </div>
      </div>

      <section className="tribes-info">
        <div className="history">
          <h2>History of Tribes</h2>
          <p>
            Tribes have existed for centuries, forming communities based on
            culture, shared resources, and traditions. They shaped human
            civilization in countless ways.
          </p>
        </div>
        <div className="future-goals">
          <h2>Future Goals</h2>
          <p>
            Our goal is to preserve tribal knowledge, foster unity among
            communities, and ensure sustainable growth for future generations.
          </p>
        </div>
      </section>

      <div className="wishlist">
        <a
          href="https://store.steampowered.com/app/3551950/Tribes/"
          target="_blank"
          rel="noopener noreferrer"
          className="wishlist-button"
        >
          Wishlist Now
        </a>
      </div>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8taukL_xkaI"
          title="Tribes Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="social-icons">
        <FaFacebook size={30} />
        <FaTwitter size={30} />
        <FaInstagram size={30} />
      </div>
    </div>
  );
}
