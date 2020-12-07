import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../css/Button.css";

const Button = ({ text }) => {
  return (
    <div className="Button">
      <a href="#">{text}</a>
    </div>
  );
};

export default Button;
