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
  console.log("hit it");
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

export const getCountriesAndOperators = airplanes => {
  const airplaneCountries = [];
  const airplaneOperators = [];
  airplanes.map(plane => {
    if (
      plane.currentCountry !== "?" &&
      plane.currentCountry !== undefined &&
      plane.currentCountry !== "" &&
      plane.currentCountry !== "No Data"
    ) {
      airplaneCountries.push(plane.currentCountry);
    }

    if (
      plane.currentOperator !== "?" &&
      plane.currentOperator !== undefined &&
      plane.currentOperator !== "" &&
      plane.currentOperator !== " " &&
      plane.currentOperator !== "No Data" &&
      plane.currentOperator !== "not operating"
    ) {
      airplaneOperators.push(plane.currentOperator);
    }

    return null;
  });

  const uniqueAirplaneCountries = [...new Set(airplaneCountries)].sort();
  const uniqueAirplaneOperators = [...new Set(airplaneOperators)].sort();

  return {
    type: actionTypes.COUNTRIES_OPERATORS,
    countries: uniqueAirplaneCountries,
    operators: uniqueAirplaneOperators
  };
};

export const handleAirplaneReset = () => {
  return {
    type: actionTypes.AIRPLANES_RESET
  };
};
