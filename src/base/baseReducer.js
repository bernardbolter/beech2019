import * as actionTypes from "./baseTypes";

const initialState = {
  baseAirplanes: [],
  baseIncidents: [],
  uniqueCountries: [],
  uniqueOperators: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_BASE_AIRPLANES:
      return {
        ...state,
        baseAirplanes: action.baseAirplanes,
        uniqueCountries: action.countries,
        uniqueOperators: action.operators
      };
    case actionTypes.GET_BASE_INCIDENTS:
      return {
        ...state,
        baseIncidents: action.baseIncidents
      };
    default:
      return state;
  }
}
