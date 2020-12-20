import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../css/SideNav.css";
import usePages from "../hooks/usePages";

const pages = ["Home", "About", "Projects", "Contact"];

const SideNav = () => {
  const [navigate, navigateDown, navigateUp] = usePages();

  return (
    <div className="SideNav">
      <FontAwesomeIcon
        icon={["fas", "angle-up"]}
        className="arrow"
        onClick={navigateUp}
      />
      {pages.map((page, key) => {
        return (
          <a href={`#${page}`} onClick={() => navigate(page)} key={key}>
            <FontAwesomeIcon
              icon={["fas", "circle"]}
              id={`SideNav${page}`}
              className="circle"
            />
          </a>
        );
      })}
      <FontAwesomeIcon
        icon={["fas", "angle-down"]}
        className="arrow"
        onClick={navigateDown}
      />
    </div>
  );
};

export default SideNav;
