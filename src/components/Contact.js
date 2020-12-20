import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import "../css/Contact.css";

import Alert from "./Alert";

const Contact = () => {
  const [alert, setAlert] = useState({
    show: false,
    error: true,
  });
  const [contact, setContact] = useState({
    from_name: null,
    email: null,
    message: null,
  });
  const handleTextChange = (e) => {
    e.preventDefault();
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    document.querySelector(".Alert").style.display = "none";
    if (contact.from_name && contact.email && contact.message) {
      emailjs
        .send(
          process.env.REACT_APP_E_SERVICE_ID,
          process.env.REACT_APP_E_TEMPLATE_ID,
          contact,
          process.env.REACT_APP_E_USER_ID
        )
        .then(() => {
          document.querySelector(".Alert").style.display = "flex";
          setAlert({
            show: true,
            error: false,
          });
          setContact({
            from_name: null,
            email: null,
            message: null,
          });
        })
        .catch((err) => {
          console.log(err);
          document.querySelector(".Alert").style.display = "flex";
          setAlert({
            show: true,
            error: true,
          });
          setContact({
            from_name: null,
            email: null,
            message: null,
          });
        });
    } else {
      document.querySelector(".Alert").style.display = "flex";
      setAlert({
        show: true,
        error: true,
      });
    }
  };
  return (
    <div id="Contact">
      <div className="contactInfo">
        <h1>Contact Me</h1>
        <div className="contactLink">
          <FontAwesomeIcon icon={["fab", "google"]} />
          <p>dilindo28@gmail.com</p>
        </div>
        <div className="contactLink">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <p>daniel-lindo</p>
        </div>
        <div className="contactLink">
          <FontAwesomeIcon icon={["fab", "github"]} />
          <p>Dlindo28</p>
        </div>
        <div className="contactLink">
          <FontAwesomeIcon icon={["fab", "instagram-square"]} />
          <p>dl.imaging</p>
        </div>
      </div>
      <form className="contactForm" onSubmit={sendMessage}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="from_name"
          onChange={handleTextChange}
          autoComplete="off"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleTextChange}
          autoComplete="off"
        />
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          onChange={handleTextChange}
          autoComplete="off"
        />
        <input type="submit" value="Submit" className="clearfix" />
      </form>
      <Alert
        error={alert.error}
        onClick={() => {
          document.querySelector(".Alert").style.display = "none";
          setAlert({
            show: false,
            error: true,
          });
        }}
      />
    </div>
  );
};

export default Contact;
