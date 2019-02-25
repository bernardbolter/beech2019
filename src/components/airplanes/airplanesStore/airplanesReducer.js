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
    case actionTypes.UPDATE_FILTERED_AIRPLANES:
      const serialRegEx = new RegExp(`^U[${action.serials}]`);
      const newFilteredAirplanes = action.allPlanes.filter(plane =>
        serialRegEx.test(plane.serial)
      );
      return {
        ...state,
        filteredAirplanes: newFilteredAirplanes,
        airplaneCount: newFilteredAirplanes.length
      };
    default:
      return state;
  }
}
