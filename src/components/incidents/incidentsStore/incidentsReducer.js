import * as actionTypes from "./incidentsTypes";

const initialState = {
  incidentsLoaded: false,
  incidentsCount: null,
  filteredIncidents: [],
  allIncidents: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FIRST_INCIDENTS:
      console.log("hit first incidents");
      return {
        ...state,
        incidentsCount: action.firstIncidents.length + 1,
        allIncidents: action.firstIncidents,
        incidentsLoaded: true
      };
    case actionTypes.FILTER_INCIDENTS:
      return {
        ...state,
        filteredIncidents: action.filteredIncidents,
        incidentsCount: action.filteredIncidents.length + 1,
        incidentsLoaded: true
      };
    case actionTypes.REVERSE_INCIDENTS:
      return {
        ...state,
        filteredIncidents: action.reverseInts
      };
    default:
      return state;
  }
}
