import { useEffect } from "react";
import "./SkyScroll.css";

export default function SkyScroll() {
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

      document.body.style.background = `rgb(${r}, ${g}, ${b})`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
