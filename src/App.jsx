import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
