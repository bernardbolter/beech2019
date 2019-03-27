import * as actionTypes from "./airplanesTypes";

const initialState = {
  airplanesLoaded: false,
  airplaneCount: null,
  allPlanes: [],
  filteredAirplanes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_FILTER_AIRPLANES:
      return {
        ...state,
        allPlanes: action.allAirplanes,
        filteredAirplanes: action.filteredAirplanes,
        airplaneCount: action.filteredAirplanes.length + 1,
        airplanesLoaded: true
      };
    default:
      return state;
  }
}
