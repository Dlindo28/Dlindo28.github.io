import React from "react";
import { useSelector } from "react-redux";

import "../css/Header.css";

/**
 * If we get issues with spacing, try using page to change nametag's display: None
 * instead of not rendering the nametag
 */

const Header = () => {
  const activePage = useSelector((store) => store.pageReducer.activePage);
  return (
    <header className="Header">
      <nav>
        <a href="#Home" id="nametag">
          Daniel Lindo
        </a>

        <div className="links">
          <a href="#About">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Gallery">Gallery</a>
          <a href="#Shop">Shop</a>
          <a href="#Contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
