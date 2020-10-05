import React from "react";
import "../styles/main.scss";
import Header from "./Header";
import About from "./About";
import Terminal from "./Terminal";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Terminal />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
