import * as actionTypes from "./incidentsTypes";

export const getFilteredIncidents = incidents => {
  return {
    type: actionTypes.FILTER_INCIDENTS,
    incidents: incidents,
    totalIncidents: incidents.length
  };
};

export const getUpdatedFilteredIncidents = (
  sorting,
  filterText,
  fatalities,
  incidentType
) => {
  return {
    type: actionTypes.UPDATE_FILTERED_INCIDENTS,
    sorting: sorting,
    filterText: filterText,
    fatalities: fatalities,
    incidentType: incidentType
  };
};
