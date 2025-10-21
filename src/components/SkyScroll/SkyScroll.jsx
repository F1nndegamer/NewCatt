import { useEffect, useRef, useState } from "react";
import "./SkyScroll.css";
import cloudImg from "../../assets/images/Background/cloud.png";
import mountainImg from "../../assets/images/Background/Mountain.png";
import groundImg from "../../assets/images/Background/Grass.png";

export default function SkyScroll() {
  const skyRef = useRef(null);
  const layers = useRef({
    cloud: null,
    mountain: null,
    ground: null,
  });

  const [active, setActive] = useState(null);

  // Handle parallax
  useEffect(() => {
    if (active) return; // Stop scroll effect while zoomed
    let ticking = false;

    const updateParallax = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300;
      const progress = Math.min(scrollTop / maxScroll, 1);

      const night = [20, 30, 60];
      const day = [135, 206, 235];
      const r = Math.round(night[0] + (day[0] - night[0]) * progress);
      const g = Math.round(night[1] + (day[1] - night[1]) * progress);
      const b = Math.round(night[2] + (day[2] - night[2]) * progress);

      if (skyRef.current)
        skyRef.current.style.background = `rgb(${r}, ${g}, ${b})`;

      layers.current.cloud.style.transform = `translateY(${scrollTop * 0.5}px)`;
      layers.current.mountain.style.transform = `translateY(${
        scrollTop * 0.2
      }px)`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    updateParallax();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  // Handle click to zoom
  const handleClick = (name) => {
    if (active === name) {
      setActive(null);
      document.body.style.overflow = "auto";
    } else {
      setActive(name);
      document.body.style.overflow = "hidden";
      const element = layers.current[name];
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Click anywhere to exit zoom
  useEffect(() => {
    const exitZoom = (e) => {
      if (!skyRef.current.contains(e.target)) return;
      if (e.target.tagName !== "IMG") {
        setActive(null);
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("click", exitZoom);
    return () => window.removeEventListener("click", exitZoom);
  }, []);

  return (
    <div ref={skyRef} className="sky-scroll">
      <div
        className={`layer cloud ${active === "cloud" ? "active" : ""}`}
        ref={(el) => (layers.current.cloud = el)}
        onClick={() => handleClick("cloud")}
      >
        <img src={cloudImg} alt="Cloud" />
      </div>
      <div
        className={`layer mountain ${active === "mountain" ? "active" : ""}`}
        ref={(el) => (layers.current.mountain = el)}
        onClick={() => handleClick("mountain")}
      >
        <img src={mountainImg} alt="Mountain" />
      </div>
      <div
        className={`layer ground ${active === "ground" ? "active" : ""}`}
        ref={(el) => (layers.current.ground = el)}
        onClick={() => handleClick("ground")}
      >
        <img src={groundImg} alt="Ground" />
      </div>
    </div>
  );
}
