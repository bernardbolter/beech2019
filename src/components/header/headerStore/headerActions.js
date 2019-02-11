import { SHOW_NEWSLETTER, SHOW_NAVIGATION, SHOW_SEARCH } from "./headerTypes";

export const showNewsletter = () => {
  return {
    type: SHOW_NEWSLETTER
  };
};

export const showSearch = () => {
  return {
    type: SHOW_SEARCH
  };
};

export const showNavigation = () => {
  return {
    type: SHOW_NAVIGATION
  };
};
