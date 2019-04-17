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

export const getCountriesAndOperators = airplanes => {
  const airplaneCountries = [];
  const airplaneOperators = [];
  airplanes.map(plane => {
    if (
      plane.latestCountry !== "?" &&
      plane.latestCountry !== undefined &&
      plane.latestCountry !== "" &&
      plane.latestCountry !== "No Data"
    ) {
      airplaneCountries.push(plane.latestCountry);
    }

    if (
      plane.latestOperator !== "?" &&
      plane.latestOperator !== undefined &&
      plane.latestOperator !== "" &&
      plane.latestOperator !== " " &&
      plane.latestOperator !== "No Data" &&
      plane.latestOperator !== "not operating"
    ) {
      airplaneOperators.push(plane.latestOperator);
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
