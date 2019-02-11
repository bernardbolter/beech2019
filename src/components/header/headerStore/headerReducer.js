import {
  TOGGLE_NEWSLETTER,
  TOGGLE_SEARCH,
  TOGGLE_NAVIGATION
} from "./headerTypes";

const initialState = {
  showNewsletter: false,
  showSearch: false,
  showNavigation: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NEWSLETTER:
      return {
        ...state,
        showNewsletter: !state.showNewsletter
      };
    case TOGGLE_SEARCH:
      return {
        ...state,
        showSearch: !state.showSearch
      };
    case TOGGLE_NAVIGATION:
      return {
        ...state,
        showNavigation: !state.showNavigation
      };
    default:
      return state;
  }
}
