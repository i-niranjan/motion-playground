import { useState } from "react";
import Navbar from "./components/Navbar";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-20 h-[500px] border border-red-900 w-full">hey</div>
      <div className="mt-20 h-[500px] border border-red-900 w-full">hey</div>
      <CallToAction />
    </>
  );
}

export default App;
