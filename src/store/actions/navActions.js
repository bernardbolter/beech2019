import { TOGGLE_MOBILE_NAV } from "./types";
import { TOGGLE_MOBILE_SEARCH } from "./types";

export const toggleMobileNav = () => {
  return {
    type: TOGGLE_MOBILE_NAV
  };
};

export const toggleMobileSearch = () => {
  return {
    type: TOGGLE_MOBILE_SEARCH
  };
};
