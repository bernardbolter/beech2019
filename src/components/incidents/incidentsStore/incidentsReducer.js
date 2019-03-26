import * as actionTypes from "./incidentsTypes";

const initialState = {
  incidentsLoaded: false,
  incidentsCount: null,
  filteredIncidents: [],
  allIncidents: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FILTER_INCIDENTS:
      return {
        ...state,
        filteredIncidents: action.filteredIncidents,
        incidentsCount: action.filteredIncidents.length,
        allIncidents: action.allIncidents,
        incidentsLoaded: true
      };
    default:
      return state;
  }
}
