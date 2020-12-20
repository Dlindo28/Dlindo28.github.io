import { SET_PAGE } from "../actions";

const href = window.location.href.split("/");
const path = href[href.length - 1].substr(1);

const initialState = {
  activePage: path ? path : "Home",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
}
