import * as actionTypes from "./airplanesTypes";

export const getFilteredAirplanes = airplanes => {
  return {
    type: actionTypes.FILTER_AIRPLANES,
    planes: airplanes,
    totalAirplanes: airplanes.length
  };
};

export const getUpdatedFilteredAirplanes = (serials, allPlanes) => {
  return {
    type: actionTypes.UPDATE_FILTERED_AIRPLANES,
    serials: serials,
    allPlanes: allPlanes
  };
};
