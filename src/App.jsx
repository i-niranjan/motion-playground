import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import About from "./pages/About";
import { AnimatePresence } from "motion/react";
function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<About />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
