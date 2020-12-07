import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div id="Contact">
      <h1>Contact</h1>
      <form onSubmit={() => console.log("ok")}>
        <label>
          Name:
          <textarea
            value={""}
            onChange={() => console.log("changed")}
          ></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
