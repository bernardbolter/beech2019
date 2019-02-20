import * as actionTypes from "./baseTypes";

const initialState = {
  baseAirplanes: [],
  baseIncidents: [],
  basefacts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_BASE_AIRPLANES:
      return {
        ...state,
        baseAirplanes: action.baseAirplanes
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
