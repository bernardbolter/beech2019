import * as actionTypes from "./incidentsTypes";

export const filterIncidents = (incidents, search) => {
  let allIncidents = incidents;
  let filteredIncidents = incidents;
  return {
    type: actionTypes.FILTER_INCIDENTS,
    filteredIncidents,
    allIncidents
  };
};
