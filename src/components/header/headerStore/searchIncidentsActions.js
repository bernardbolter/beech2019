import * as actionTypes from "./headerTypes";

export const changeIncidentSearchText = value => {
  return {
    type: actionTypes.INCIDENT_SEARCH_TEXT,
    text: value
  };
};
