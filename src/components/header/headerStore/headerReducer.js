import { SHOW_NEWSLETTER, SHOW_SEARCH, SHOW_NAVIGATION } from "./headerTypes";

const initialState = {
  showNewsletter: false,
  showSearch: false,
  showNavigation: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_NEWSLETTER:
      return {
        ...state,
        showNewsletter: !state.showNewsletter
      };
    case SHOW_SEARCH:
      return {
        ...state,
        showSearch: !state.showSearch
      };
    case SHOW_NAVIGATION:
      return {
        ...state,
        showNavigation: !state.showNavigation
      };
    default:
      return state;
  }
}
