import {
  TOGGLE_NEWSLETTER,
  TOGGLE_NAVIGATION,
  TOGGLE_SEARCH
} from "./headerTypes";

export const toggleNewsletter = () => {
  return {
    type: TOGGLE_NEWSLETTER
  };
};

export const toggleSearch = () => {
  return {
    type: TOGGLE_SEARCH
  };
};

export const toggleNavigation = () => {
  return {
    type: TOGGLE_NAVIGATION
  };
};
