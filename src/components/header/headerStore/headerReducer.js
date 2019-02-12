import {
  TOGGLE_NEWSLETTER,
  TOGGLE_SEARCH,
  TOGGLE_NAVIGATION
} from "./headerTypes";

const initialState = {
  showNewsletter: false,
  showSearch: false,
  showNavigation: false,
  // Incident Variables
  incidentsFilter: "",
  incidentsOlderChecked: false,
  incidentsNewerChecked: false,
  incidentsFatalitiesChecked: false,
  incidenstType: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NEWSLETTER:
      return {
        ...state,
        showNewsletter: !state.showNewsletter
      };
    case TOGGLE_SEARCH:
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
    case TOGGLE_NAVIGATION:
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
