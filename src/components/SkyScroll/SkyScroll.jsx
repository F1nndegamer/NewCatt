import { useEffect, useRef } from "react";
import "./SkyScroll.css";
import Profile from "../../assets/icons/Profile/profile.png";

export default function SkyScroll() {
  const skyRef = useRef(null);

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
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={skyRef} className="sky-scroll">
      <div className="sky-scroll-content">
        <img src={Profile} alt="Profile" className="profile-img" />
      </div>
    </div>
  );
}
