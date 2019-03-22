import * as actionTypes from "./airplanesTypes";

export const getFilteredAirplanes = airplanes => {
  console.log(airplanes);
  return {
    type: actionTypes.FILTER_AIRPLANES,
    planes: airplanes,
    totalAirplanes: airplanes.length
  };
};

export const getUpdatedFilteredAirplanes = (
  serials,
  status,
  country,
  operator,
  sorting,
  filterText,
  allPlanes
) => {
  return {
    type: actionTypes.UPDATE_FILTERED_AIRPLANES,
    serials: serials,
    status: status,
    sorting: sorting,
    country: country,
    operator: operator,
    filterText: filterText,
    allPlanes: allPlanes
  };
};
