import { TOGGLE_MOBILE_NAV, TOGGLE_MOBILE_SEARCH } from "../actions/types";

const initialState = { openMobileNav: false, openMobileSearch: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MOBILE_NAV:
      return {
        ...state,
        openMobileNav: !state.openMobileNav
      };
    case TOGGLE_MOBILE_SEARCH:
      return {
        ...state,
        openMobileSearch: !state.openMobileSearch
      };
    default:
      return state;
  }
}
