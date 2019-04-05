import * as actionTypes from "./headerTypes";

export const changeIncidentsSearchText = value => {
  return {
    type: actionTypes.INCIDENT_SEARCH_TEXT,
    text: value
  };
};

export const changeIncidentsFilter = value => {
  return {
    type: actionTypes.INCIDENT_FILTER,
    filterValue: value
  };
};

export const changeIncidentsDropdown = value => {
  return {
    type: actionTypes.INCIDENT_DROPDOWN,
    dropValue: value
  };
};

export const incidentsSearchReset = () => {
  return {
    type: actionTypes.INCIDENT_RESET
  };
};

export const getIncidentTypes = incidents => {
  const incidentTypes = [];
  incidents.map(inc => {
    if (
      inc.accidentCategory !== "?" &&
      inc.accidentCategory !== undefined &&
      inc.accidentCategory !== "" &&
      inc.accidentCategory !== " " &&
      inc.accidentCategory !== "No Data" &&
      inc.accidentCategory !== "No Data " &&
      inc.accidentCategory !== "No data"
    ) {
      incidentTypes.push(inc.accidentCategory);
    }

    return null;
  });

  const uniqueIncidentTypes = [...new Set(incidentTypes)].sort();

  return {
    type: actionTypes.GET_UNIQUE_INCIDENTS,
    incidents: uniqueIncidentTypes
  };
};
