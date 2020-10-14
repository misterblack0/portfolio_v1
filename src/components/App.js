import React from "react";
import "./app.scss";
import Navbar from "./Navbar";
import About from "./About";
import Terminal from "./Terminal";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => (
  <>
    <Navbar />
    <About />
    <Terminal />
    <Projects />
    <Contact />
    <Footer />
  </>
);

export default App;
