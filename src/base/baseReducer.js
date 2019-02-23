import * as actionTypes from "./baseTypes";

const initialState = {
  baseAirplanes: [],
  baseIncidents: [],
  basefacts: [],
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
    case actionTypes.GET_BASE_FACTS:
      return {
        ...state,
        baseFacts: action.baseFacts
      };
    default:
      return state;
  }
}
