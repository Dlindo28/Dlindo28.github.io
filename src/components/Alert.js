import React from "react";
import "../css/Alert.css";

const Alert = ({ error, onClick }) => {
  return (
    <div className="Alert">
      {!error ? (
        <p>Message sent.</p>
      ) : (
        <p>Message failed. Try again or contact me at dilindo28@gmail.com</p>
      )}
      <p onClick={onClick} id="exitTag">
        X
      </p>
    </div>
  );
};

export default Alert;
