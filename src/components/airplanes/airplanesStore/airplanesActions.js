import * as actionTypes from "./airplanesTypes";

export const getFilteredAirplanes = airplanes => {
  return {
    type: actionTypes.FILTER_AIRPLANES,
    planes: airplanes,
    totalAirplanes: airplanes.length
  };
};
