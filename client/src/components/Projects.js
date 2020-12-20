import React, { useEffect } from "react";
import usePages from "../hooks/usePages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Projects.css";

const Projects = () => {
  const navigateDown = usePages()[1];
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.querySelector(".twitter-embed").appendChild(script);
  });

  return (
    <div id="Projects">
      <div id="projectRow">
        <div className="ProjectContainer">
          <a
            className="ProjectBlock"
            id="acnh"
            href="https://github.com/Dlindo28/ACNH-Stalks-Helper"
            target="_blank"
          ></a>
          <div className="projectTitle">
            <p>ACNH Stalks Tool</p>
            <a
              href="https://github.com/Dlindo28/ACNH-Stalks-Helper"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </div>
        </div>
        <div className="ProjectContainer" id="mu">
          <div className="ProjectBlock twitter-embed">
            <a
              className="twitter-timeline"
              data-tweet-limit="3"
              data-hei
              href="https://twitter.com/MusicUncovered_?ref_src=twsrc%5Etfw"
            >
              Tweets by MusicUncovered_
            </a>
          </div>
          <div className="projectTitle">
            <p>Music Uncovered</p>
            <a
              href="https://github.com/Dlindo28/MusicUncoveredBot"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </div>
        </div>
        <div className="ProjectContainer">
          <a
            href="https://dl-imaging.herokuapp.com"
            target="_blank"
            className="ProjectBlock"
            id="dl"
          ></a>
          <div className="projectTitle">
            <p>DL Imaging</p>
            <a href="https://github.com/Dlindo28/dl-imaging" target="_blank">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </div>
        </div>
      </div>
      <div className="contactButton" onClick={() => navigateDown()}>
        <p>Contact Me</p>
        <FontAwesomeIcon icon={["fas", "angle-down"]} />
      </div>
    </div>
  );
};

export default Projects;

/**
 * <div className="contactButton" onClick={() => navigateDown()}>
          <p>Contact Me</p>
          <FontAwesomeIcon icon={["fas", "angle-down"]} />
        </div>
 */
