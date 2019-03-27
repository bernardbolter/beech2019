import * as actionTypes from "./headerTypes";

export const toggleSearch = () => {
  return {
    type: actionTypes.TOGGLE_SEARCH
  };
};

export const toggleNavigation = () => {
  return {
    type: actionTypes.TOGGLE_NAVIGATION
  };
};

export const linkWithReset = (link, path) => {
  return dispatch => {
    if (link === "airplanes") {
      dispatch({
        type: actionTypes.AIRPLANES_RESET
      });
    } else {
      dispatch({
        type: actionTypes.INCIDENT_RESET
      });
      // browserHistory.push(path);
    }
  };
};
