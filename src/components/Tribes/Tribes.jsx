import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaWikipediaW, FaDiscord, FaPatreon, FaYoutube } from "react-icons/fa";
import "./Tribes.css";
import logo from "../../assets/icons/games/tribes.png";
import { BsTiktok } from "react-icons/bs";

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
  const [activeIndex, setActiveIndex] = useState(null);
  const slideshowRef = React.useRef();

  const handleImageClick = (index) => {
    const slideshow = slideshowRef.current;
    const img = slideshow.children[index];

    if (activeIndex === index) {
      setActiveIndex(null);
      return;
    }

    setActiveIndex(index);

    const offsetLeft =
      img.offsetLeft - slideshow.offsetWidth / 2 + img.offsetWidth / 2;
    slideshow.scrollTo({
      left: offsetLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!slideshowRef.current.contains(e.target)) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="tribes-page" id="tribes">
      <img src={logo} alt="TRIBES" className="tribes-logo" />
      <div
        className={`slideshow ${activeIndex !== null ? "paused" : ""}`}
        ref={slideshowRef}
      >
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`tribe-${index}`}
            className={activeIndex === index ? "active" : ""}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <section className="tribes-info">
        <div className="history">
          <h2>History of Tribes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            libero lorem, finibus a aliquet vitae, pulvinar in mi. Vestibulum
            semper non sapien aliquet commodo. Aenean dapibus finibus turpis, ac
            congue lorem ornare et. Ut hendrerit ante elit, nec tempus lorem
            rhoncus tincidunt. Fusce tincidunt orci elit, dignissim hendrerit
            justo cursus vitae. Duis efficitur vehicula urna. Nunc sodales,
            velit eu gravida pulvinar, felis arcu interdum metus, at vehicula
            urna augue at lacus. Sed vel nulla ipsum. Sed consequat consectetur
            ante, tempor malesuada lacus malesuada in. Vestibulum vel nisi non
            purus placerat porta. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas.
            <br /> <br />
            Morbi ac ante sed nulla efficitur lacinia. Sed eu tempus nisl.
            Mauris eleifend nisl lectus. Vestibulum aliquet ante at est
            ultricies molestie. Integer vel accumsan urna. Donec eget ornare
            metus, at dignissim turpis. In hac habitasse platea dictumst.
            Pellentesque tempor rutrum arcu vitae pharetra. Aliquam aliquam
            magna vel nunc fermentum sodales. Suspendisse pharetra magna ac erat
            ultricies accumsan. Sed feugiat mollis odio quis fringilla. Vivamus
            ut mi id sem porttitor dictum. Suspendisse in eleifend dolor, sed
            sagittis massa. Nulla facilisi.
          </p>
        </div>
        <div className="future-goals">
          <h2>Future Goals</h2>
          <p>
            Future After releasing Tribes fully we would like to update Tribes
            throughout 2026 to get it to an amazing state and round up the game
            to a good and finished point. (We will still have the option of
            coming back and adding more and we will be working on bug fixes
            ofcourse) <br /> <br /> After Tribes we dont have a set game idea we
            would like to work on. There are tons of game genres and things we
            would like to try and possibly even go back to work on some of our
            older games. We have a high chance to even try out 3D games and very
            different genres from Tribes. However this will all happen according
            to how things go with Tribes and our personal lives.
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
        <FaYoutube size={30} />
        <FaWikipediaW size={30} />
      </div>
    </div>
  );
}
