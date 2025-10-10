import { useEffect, useRef } from "react";
import "./SkyScroll.css";
import Profile from "../../assets/icons/Profile/profile.png";
import cloud from "../../assets/images/Background/cloud.png";
import mountain from "../../assets/images/Background/Mountain.png"; 
import ground from "../../assets/images/Background/Grass.png";

export default function SkyScroll() {
  const skyRef = useRef(null);
  const cloudRef = useRef(null);
  const mountainRef = useRef(null);
  const groundRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const ScrollHeight = 300;
      const scrollTop = window.scrollY;
      const scrolled = Math.min(scrollTop / ScrollHeight, 1);

      const nightColor = [20, 30, 60];
      const dayColor = [135, 206, 235];
      const r = Math.round(nightColor[0] + (dayColor[0] - nightColor[0]) * scrolled);
      const g = Math.round(nightColor[1] + (dayColor[1] - nightColor[1]) * scrolled);
      const b = Math.round(nightColor[2] + (dayColor[2] - nightColor[2]) * scrolled);

      if (skyRef.current) {
        skyRef.current.style.background = `rgb(${r}, ${g}, ${b})`;
      }

      if (cloudRef.current)
        cloudRef.current.style.transform = `translateY(${scrollTop * 0}px)`;
      if (mountainRef.current)
        mountainRef.current.style.transform = `translateY(${scrollTop * 0.2}px)`;
      if (groundRef.current)
        groundRef.current.style.transform = `translateY(${scrollTop * 0.1}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={skyRef} className="sky-scroll">
      <div className="sky-layer cloud" ref={cloudRef}>
        <img src={cloud} alt="cloud" />
      </div>
      <div className="sky-layer mountain" ref={mountainRef}>
        <img src={mountain} alt="mountain" />
      </div>
      <div className="sky-layer ground" ref={groundRef}>
        <img src={ground} alt="ground" />
      </div>
      <div className="sky-scroll-content">
      </div>
    </div>
  );
}
