import { useState, useRef } from "react";
import "./MusicButton.css";
import musicFile from "../../assets/Music/Tribes - Main Theme.wav";

export default function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(new Audio(musicFile));

  const togglePlay = () => {
    const audio = audioRef.current;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="music-button" onClick={togglePlay}>
      {playing ? "⏸" : "▶️"}
    </div>
  );
}
