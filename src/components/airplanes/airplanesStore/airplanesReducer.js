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
      const statusRegEx = new RegExp(`^[${action.status}]`);
      let newFilteredAirplanes = action.allPlanes.filter(
        plane =>
          serialRegEx.test(plane.serial) &&
          statusRegEx.test(plane.currentStatus)
      );
      if (action.operator !== "") {
        newFilteredAirplanes = newFilteredAirplanes.filter(plane => {
          return plane.latestOperator === action.operator;
        });
      }
      if (action.country !== "") {
        newFilteredAirplanes = newFilteredAirplanes.filter(plane => {
          return plane.latestCountry === action.country;
        });
      }
      if (!action.sorting) {
        newFilteredAirplanes = newFilteredAirplanes.reverse();
      }

      if (action.filterText !== "") {
        const matchesFilter = new RegExp(action.filterText, "i");
        newFilteredAirplanes = newFilteredAirplanes.filter(
          plane =>
            !action.filterText ||
            matchesFilter.test(plane.serial) ||
            matchesFilter.test(plane.latestReg)
        );
      }
      return {
        ...state,
        filteredAirplanes: newFilteredAirplanes,
        airplaneCount: newFilteredAirplanes.length
      };
    default:
      return state;
  }
}
