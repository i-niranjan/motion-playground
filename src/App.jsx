import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CallToAction />
    </>
  );
}

export default App;
