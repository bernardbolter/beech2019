import * as actionTypes from "./headerTypes";

const initialState = {
  incidentSearchText: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.COUNTRIES_OPERATORS:
      return {
        ...state,
        airplanesCountries: action.countries,
        airplanesOperators: action.operators
      };
    case actionTypes.AIRPLANE_SEARCH_TEXT:
      return {
        ...state,
        airplanesSearchText: action.text
      };
    default:
      return state;
  }
}
