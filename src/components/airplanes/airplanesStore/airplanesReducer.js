import * as actionTypes from "./airplanesTypes";

const initialState = {
  airplanesLoaded: false,
  airplaneCount: null,
  filteredAirplanes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FILTER_AIRPLANES:
      return {
        ...state,
        filteredAirplanes: action.planes,
        airplaneCount: action.totalAirplanes,
        airplanesLoaded: true
      };
    default:
      return state;
  }
}
