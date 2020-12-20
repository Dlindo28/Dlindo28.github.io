import React from "react";

import "../css/Button.css";

const Button = ({ children, onClick, className }) => {
  return (
    <div className={`Button ${className}`} onClick={onClick}>
      <p>{children}</p>
    </div>
  );
};

export default Button;
