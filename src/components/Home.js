import React from "react";
import { useDispatch } from "react-redux";
import "../css/Home.css";

import Button from "./Button";

import { setPage } from "../actions/pageActions";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div id="Home">
      <div>
        <h1>Daniel Lindo</h1>
        <p>Software Engineer. Artist. Student.</p>
      </div>

      <img src={require("../images/headshot.png")} alt="headshot" />

      <Button
        onClick={() => {
          document.querySelector(`#SideNavHome`).classList.remove("active");
          window.location.href = "#About";
          document.querySelector(`#SideNavAbout`).classList.add("active");
          dispatch(setPage("About"));
        }}
      >
        Let's Go
      </Button>
    </div>
  );
};

export default Home;
