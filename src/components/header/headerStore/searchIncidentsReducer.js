import * as actionTypes from "./headerTypes";

const initialState = {
  incidentsSearchText: "",
  incidentsOlderChecked: false,
  incidentsNewerChecked: true,
  incidentsFilter: "",
  incidentsFatalitiesChecked: false,
  incidentsPhotosChecked: false,
  incidentsCategory: "",
  uniqueIncidents: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCIDENT_SEARCH_TEXT:
      return {
        ...state,
        incidentsSearchText: action.text
      };
    case actionTypes.INCIDENT_FILTER:
      if (action.filterValue === "fatalities") {
        return {
          ...state,
          incidentsFatalitiesChecked: !state.incidentsFatalitiesChecked
        };
      } else if (action.filterValue === "photos") {
        return {
          ...state,
          incidentsPhotosChecked: !state.incidentsPhotosChecked
        };
      } else {
        return state;
      }
    case actionTypes.INCIDENT_SORT:
      console.log(action);
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
        incidentsSearchText: "",
        incidentsOlderChecked: false,
        incidentsNewerChecked: true,
        incidentsFilter: "",
        incidentsFatalitiesChecked: false,
        incidentsPhotosChecked: false,
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
