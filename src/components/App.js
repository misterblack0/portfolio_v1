import React from "react";
import "../styles/main.scss";
import Navbar from "./Navbar";
import About from "./About";
import Terminal from "./Terminal";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => (
  <div>
    <Navbar />
    <About />
    <Terminal />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default App;
