import React from "react";
import "../css/App.css";

import Home from "../components/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNav from "../components/SideNav";
import About from "../components/About";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import Shop from "../components/Shop";
import Contact from "../components/Contact";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="ContentContainer">
        <Home />
        <About />
        <Projects />
        <Gallery />
        <Shop />
        <Contact />
      </div>
      <SideNav />
      <Footer />
    </div>
  );
};

export default App;
