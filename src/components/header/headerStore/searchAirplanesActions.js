import * as actionTypes from "./headerTypes";

export const getAirplaneSearchValues = () => {
  return {
    type: actionTypes.AIRPLANE_SEARCH_VALUES
  };
};

export const changeAirplaneSearchText = value => {
  return {
    type: actionTypes.AIRPLANE_SEARCH_TEXT,
    text: value
  };
};

export const changeAirplaneSort = value => {
  return {
    type: actionTypes.AIRPLANE_SORT,
    sortValue: value
  };
};

export const changeAirplaneFilter = value => {
  return {
    type: actionTypes.AIRPLANE_FILTER,
    filterValue: value
  };
};

export const changeAirplaneDropdown = (value, selector) => {
  return {
    type: actionTypes.AIRPLANE_DROPDOWN,
    dropValue: value,
    selector: selector
  };
};

export const handleAirplaneReset = () => {
  console.log("reset");
  return {
    type: actionTypes.AIRPLANES_RESET
  };
};
