import React from "react";
import usePages from "../hooks/usePages";

import "../css/Header.css";

/**
 * If we get issues with spacing, try using page to change nametag's display: None
 * instead of not rendering the nametag
 */

const Header = () => {
  const navigate = usePages()[0];
  return (
    <header className="Header">
      <nav>
        <a href="#Home" id="nametag" onClick={() => navigate("Home")}>
          Daniel Lindo
        </a>

        <div className="links">
          <a href="#About" onClick={() => navigate("About")}>
            About
          </a>
          <a href="#Projects" onClick={() => navigate("Projects")}>
            Projects
          </a>
          <a href="#Contact" onClick={() => navigate("Contact")}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
