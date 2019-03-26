import * as actionTypes from "./headerTypes";

const initialState = {
  incidentSearchText: "",
  incidentsOlderChecked: false,
  incidentsNewerChecked: true,
  incidentsFilter: "",
  incidentsFatalitiesChecked: false,
  incidentsCategory: "",
  uniqueIncidents: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCIDENT_SEARCH_TEXT:
      return {
        ...state,
        incidentSearchText: action.text
      };
    case actionTypes.INCIDENT_FILTER:
      return {
        ...state,
        incidentsFatalitiesChecked: !state.incidentsFatalitiesChecked
      };
    case actionTypes.INCIDENT_SORT:
      if (action.sortValue === "newer") {
        return {
          ...state,
          incidentsNewerChecked: true,
          incidentsOlderChecked: false
        };
      } else {
        return {
          ...state,
          incidentsNewerChecked: false,
          incidentsOlderChecked: true
        };
      }
    case actionTypes.INCIDENT_RESET:
      return {
        ...state,
        incidentSearchText: "",
        incidentsOlderChecked: false,
        incidentsNewerChecked: true,
        incidentsFilter: "",
        incidentsFatalitiesChecked: false,
        incidentsCategory: ""
      };
    case actionTypes.INCIDENT_DROPDOWN:
      return {
        ...state,
        incidentsCategory: action.dropValue
      };
    case actionTypes.GET_UNIQUE_INCIDENTS:
      return {
        ...state,
        uniqueIncidents: action.incidents
      };
    default:
      return state;
  }
}
