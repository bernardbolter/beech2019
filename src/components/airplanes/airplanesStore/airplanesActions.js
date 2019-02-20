import * as actionTypes from "./airplanesTypes";

export const getFilteredAirplanes = airplanes => {
  console.log(airplanes);
  let filteredAirplanes = [];

  return {
    type: actionTypes.FILTER_AIRPLANES,
    planes: filteredAirplanes
  };
};

export const airplanesHaveBeenLoaded = airplanes => {
  console.log(airplanes);
  return {
    type: actionTypes.AIRPLANES_ARE_LOADED,
    airplanes: airplanes,
    totalAirplanes: airplanes.length
  };
};
