import * as actionTypes from "./headerTypes";

const initialState = {
  showNewsletter: false,
  showSearch: false,
  showNavigation: false,
  // Airplane Values
  airplanesSearchText: "",
  airplanesOlderChecked: true,
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
  console.log("hit reducer");
  switch (action.type) {
    case actionTypes.AIRPLANE_SEARCH_TEXT:
      console.log(action.text);
      return {
        ...state,
        airplanesSearchText: action.text
      };
    case actionTypes.AIRPLANE_FILTER:
      let filterVariable = `${action.filterValue}Checked`;
      return {
        ...state,
        [filterVariable]: !state[filterVariable]
      };
    case actionTypes.AIRPLANE_SORT:
      if (action.sortValue === "newer") {
        return {
          ...state,
          airplanesNewerChecked: true,
          airplanesOlderChecked: false
        };
      } else {
        return {
          ...state,
          airplanesNewerChecked: false,
          airplanesOlderChecked: true
        };
      }
    case actionTypes.AIRPLANE_DROPDOWN:
      let operator = "";
      let country = "";
      if (action.selector === "operator") {
        operator = action.dropValue;
        country = state.airplanesCountryValue;
      } else {
        operator = state.airplanesLatestOperatorValue;
        country = action.dropValue;
      }
      return {
        ...state,
        airplanesLatestOperatorValue: operator,
        airplanesCountryValue: country
      };
    case actionTypes.AIRPLANES_RESET:
      return {
        ...state,
        airplanesSearchText: "",
        airplanesOlderChecked: true,
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
        airplanesCountryValue: ""
      };
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
