import {
  TOGGLE_NEWSLETTER,
  TOGGLE_SEARCH,
  TOGGLE_NAVIGATION
} from "./headerTypes";

const initialState = {
  showNewsletter: false,
  showSearch: false,
  showNavigation: false,
  // Airplane Values
  airplanesFilter: "",
  airplanesOlderChecked: false,
  airplanesNewerChecked: false,
  uaChecked: false,
  ubChecked: false,
  ucChecked: false,
  udChecked: false,
  ueChecked: false,
  operatingChecked: false,
  operatingNonCurrentChecked: false,
  nonFlyingChecked: false,
  partedOutChecked: false,
  destroyedChecked: false,
  airplanesLatestOperatorValue: "",
  airplanesLatestOperator: [],
  airplanesCountryValue: "",
  airplanesCountry: [],
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
