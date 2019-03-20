import * as actionTypes from "./headerTypes";

export const toggleSearch = () => {
  return {
    type: actionTypes.TOGGLE_SEARCH
  };
};

export const toggleNavigation = () => {
  return {
    type: actionTypes.TOGGLE_NAVIGATION
  };
};
