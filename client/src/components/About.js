import React from "react";
import usePages from "../hooks/usePages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaHtml5,
  FaPython,
  FaJava,
  FaGit,
  FaReact,
  FaDocker,
  FaCss3,
  FaJs,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import "../css/About.css";

import Button from "./Button";

const About = () => {
  const navigateDown = usePages()[1];
  return (
    <div id="About">
      <div className="AboutContent">
        <h1>About Me</h1>
        <p>
          I’m a senior at Santa Clara University majoring in Computer Science
          graduating in June. My background in CS is mainly focused towards full
          stack web development using Python and Javascript. I have experience
          working as part of a couple of development programs at Google, and
          working on independent projects for myself.{" "}
        </p>
        <h2
          style={{
            marginTop: "10vh",
            alignSelf: "center",
          }}
        >
          Skills
        </h2>

        <div className="skillContainer">
          <div className="skillCol">
            <div className="skillItem">
              <FaPython />
              <p>Python</p>
            </div>

            <div className="skillItem">
              <FaJava />
              <p>Java</p>
            </div>

            <div className="skillItem">
              <FaGit />
              <p>Git</p>
            </div>
          </div>

          <div className="skillCol">
            <div className="skillItem">
              <FaReact />
              <p>React</p>
            </div>
            <div className="skillItem">
              <FaDocker />
              <p>Docker</p>
            </div>
            <div className="skillItem">
              <GrMysql />
              <p>MySQL</p>
            </div>
          </div>

          <div className="skillCol">
            <div className="skillItem">
              <FaHtml5 />
              <p>HTML</p>
            </div>
            <div className="skillItem">
              <FaCss3 />
              <p>CSS</p>
            </div>
            <div className="skillItem">
              <FaJs />
              <p>Javascript</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ResumeContainer">
        <img
          src={require("../images/resume.jpg")}
          alt="Resume"
          id="resumeImage"
        />
        <a href={require("../images/resume.pdf")} target="_blank">
          <Button>Download Resume</Button>
        </a>
      </div>
      <div className="projectsButton" onClick={() => navigateDown()}>
        <p>Projects</p>
        <FontAwesomeIcon icon={["fas", "angle-down"]} />
      </div>
    </div>
  );
};

export default About;
