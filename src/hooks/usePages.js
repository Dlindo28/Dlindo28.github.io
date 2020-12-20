import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../actions/pageActions";

const usePages = () => {
  const dispatch = useDispatch();
  const activePage = useSelector((store) => store.pageReducer.activePage);
  const pages = ["Home", "About", "Projects", "Contact"];

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
    document.querySelector(`#SideNav${activePage}`).classList.add("active");
  }, [activePage]);

  return [handleClick, handleClickDown, handleClickUp];
};

export default usePages;
