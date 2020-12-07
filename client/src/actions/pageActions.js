import { SET_PAGE } from "./index";

export const setPage = (newPage) => {
  return {
    type: SET_PAGE,
    payload: newPage || "Home",
  };
};
