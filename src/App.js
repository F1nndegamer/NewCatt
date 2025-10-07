import React from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import AboutUs from "./components/About/About";
import TribesSection from "./components/Tribes/Tribes";
import ContactUs from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Intro />
    </div>
  );
}
