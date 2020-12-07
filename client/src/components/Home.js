import React from "react";
import "../css/Home.css";

import SideNav from "./SideNav";

const Home = () => {
  return (
    <div id="Home">
      <div>
        <h1>Daniel Lindo</h1>
        <p>Web Development. Photography. Simplified.</p>
      </div>

      <img src={require("../images/headshot.png")} alt="headshot" />
    </div>
  );
};

export default Home;
