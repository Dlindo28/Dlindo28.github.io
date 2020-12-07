import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../css/SideNav.css";
import { setPage } from "../actions/pageActions";

const pages = ["Home", "About", "Projects", "Gallery", "Shop", "Contact"];

const SideNav = () => {
  const dispatch = useDispatch();
  const activePage = useSelector((store) => store.pageReducer.activePage);

  const handleClick = (page) => {
    document.querySelector(`#SideNav${activePage}`).classList.remove("active");
    dispatch(setPage(page));
    document.querySelector(`#SideNav${page}`).classList.add("active");
  };

  const handleClickUp = () => {
    if (activePage !== "Home") {
      const currentIndex = pages.indexOf(activePage);
      const nextPage = pages[currentIndex - 1];
      window.location.href = `#${nextPage}`;
      handleClick(nextPage);
    }
  };

  const handleClickDown = () => {
    if (activePage !== "Contact") {
      const currentIndex = pages.indexOf(activePage);
      const nextPage = pages[currentIndex + 1];
      window.location.href = `#${nextPage}`;
      handleClick(nextPage);
    }
  };

  useEffect(() => {
    document.querySelector(`#SideNavHome`).classList.add("active");
  }, []);

  return (
    <div className="SideNav">
      <FontAwesomeIcon
        icon={["fas", "angle-up"]}
        className="arrow"
        onClick={handleClickUp}
      />
      {pages.map((page, key) => {
        return (
          <a href={`#${page}`} onClick={() => handleClick(page)} key={key}>
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
        onClick={handleClickDown}
      />
    </div>
  );
};

export default SideNav;
