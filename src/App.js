import React from "react";

import About from "./About";
import Prize from "./Prize";
import Home from "./Home";

import Contact from "./Contact";
import Sponsors from "./Sponsors";
import Tracks from "./Tracks";

const App = () => {
  return (
    <div className="bg-newcolor">
      <Home />
      <About />
      <Prize />
      <Tracks />
      <Sponsors />
      <Contact />
    </div>
  );
};

export default App;
