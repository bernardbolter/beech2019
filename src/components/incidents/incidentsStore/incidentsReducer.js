import * as actionTypes from "./incidentsTypes";

const initialState = {
  incidentsLoaded: false,
  incidentsCount: null,
  filteredIncidents: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FILTER_INCIDENTS:
      return {
        ...state,
        filteredIncidents: action.incidents,
        incidentsCount: action.totalIncidents,
        incidentsLoaded: true
      };
    case actionTypes.UPDATE_FILTERED_INCIDENTS:
      return {
        ...state
      };
    default:
      return state;
  }
}
