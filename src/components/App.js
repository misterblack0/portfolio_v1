import React from "react";
import "../styles/main.scss";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
