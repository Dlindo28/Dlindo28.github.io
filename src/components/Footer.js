import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Footer.css";

const icons = [
  { name: "github", prefix: "fab", link: "https://www.github.com/Dlindo28" },
  {
    name: "instagram-square",
    prefix: "fab",
    link: "https://www.instagram.com/dl.imaging",
  },
  {
    name: "linkedin",
    prefix: "fab",
    link: "https://www.linkedin.com/in/daniel-lindo",
  },
  {
    name: "envelope",
    prefix: "fas",
    link: "mailto:dilindo28@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="Footer">
      {icons.map((icon, key) => (
        <a href={icon.link} target="_blank" rel="noopener noreferrer" key={key}>
          <FontAwesomeIcon
            icon={[icon.prefix, icon.name]}
            className="footerIcon"
          />
        </a>
      ))}
    </footer>
  );
};

export default Footer;
