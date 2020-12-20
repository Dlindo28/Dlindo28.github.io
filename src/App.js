import React, { useEffect } from "react";
import "./css/App.css";

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useSelector } from "react-redux";

const App = () => {
  const page = useSelector((store) => store.pageReducer.activePage);
  useEffect(() => {
    if (page) {
      window.location.href = `#${page}`;
    }
  }, [page]);
  return (
    <div className="App">
      <Header />
      <div className="ContentContainer">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <SideNav />
      <Footer />
    </div>
  );
};

export default App;
