import * as actionTypes from "./headerTypes";

const initialState = {
  showNewsletter: false,
  showSearch: false,
  showNavigation: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_NEWSLETTER:
      return {
        ...state,
        showNewsletter: !state.showNewsletter
      };
    case actionTypes.TOGGLE_SEARCH:
      let navState;
      if (!state.showSearch && state.showNavigation) {
        navState = false;
      } else {
        navState = state.showNavigation;
      }
      return {
        ...state,
        showSearch: !state.showSearch,
        showNavigation: navState
      };
    case actionTypes.TOGGLE_NAVIGATION:
      let searchState;
      if (!state.showNavigation && state.showSearch) {
        searchState = false;
      } else {
        searchState = state.showSearch;
      }
      return {
        ...state,
        showNavigation: !state.showNavigation,
        showSearch: searchState
      };
    default:
      return state;
  }
}
