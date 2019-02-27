import * as actionTypes from "./headerTypes";

export const toggleNewsletter = () => {
  return {
    type: actionTypes.TOGGLE_NEWSLETTER
  };
};

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
