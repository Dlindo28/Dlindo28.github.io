import React from "react";
import "../css/Projects.css";

const Projects = () => {
  return (
    <div id="Projects">
      <div className="ProjectContainer" id="mu">
        <div className="ProjectBlock" id="block-1"></div>
        <p>MusicUncovered</p>
      </div>
      <div className="ProjectContainer" id="acnh">
        <div className="ProjectBlock"></div>
        <p>Animal Crossing</p>
      </div>
      <div className="ProjectContainer" id="dl">
        <div className="ProjectBlock"></div>
        <p>DL Imaging</p>
      </div>
    </div>
  );
};

export default Projects;
