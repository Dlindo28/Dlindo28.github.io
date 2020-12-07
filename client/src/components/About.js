import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div id="About">
      <div className="AboutContent">
        <h1>About Me</h1>
        <p>I am..</p>
      </div>
      <div className="ResumeContainer">
        <a href={require("../images/resume.pdf")}>
          <img src={require("../images/resume.jpg")} alt="Resume" />
          <p>Resume</p>
        </a>
      </div>
    </div>
  );
};

export default About;
