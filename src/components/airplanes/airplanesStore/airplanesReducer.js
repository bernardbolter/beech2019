import * as actionTypes from "./airplanesTypes";

const initialState = {
  airplanesLoaded: false,
  airplaneCount: null,
  filteredAirplanes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.AIRPLANES_ARE_LOADED:
      return {
        ...state,
        airplanesLoaded: true,
        filteredAirplanes: action.airplanes,
        airplaneCount: action.totalAirplanes
      };
    case actionTypes.FILTER_AIRPLANES:
      return {
        ...state,
        filteredplanes: action.planes
      };
    default:
      return state;
  }
}
