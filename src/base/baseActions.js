import * as actionTypes from "./baseTypes";

export const getBaseAirplanes = airplanes => {
  let airplanesArrayRaw = Object.keys(airplanes).map(key => airplanes[key]);
  let airplanesArray = [];
  let airplaneCountries = [];
  let airplaneOperators = [];
  airplanesArrayRaw.map(plane => {
    if (plane.latestCountry !== "?" && plane.latestCountry !== undefined) {
      if (plane.latestCountry.charAt(0) === `(`) {
        plane.latestCountry = plane.latestCountry.slice(1, -1);
      }
      airplaneCountries.push(plane.latestCountry);
    }

    if (
      plane.latestOperator !== "?" &&
      plane.latestOperator !== undefined &&
      plane.latestOperator !== ""
    ) {
      if (plane.latestOperator.charAt(0) === `(`) {
        plane.latestOperator = plane.latestOperator.slice(1, -1);
      }
      airplaneOperators.push(plane.latestOperator);
    }

    return airplanesArray.push(plane);
  });

  let uniqueAirplaneCountries = [...new Set(airplaneCountries)].sort();
  let uniqueAirplaneOperators = [...new Set(airplaneOperators)].sort();

  return {
    type: actionTypes.GET_BASE_AIRPLANES,
    baseAirplanes: airplanesArray,
    countries: uniqueAirplaneCountries,
    operators: uniqueAirplaneOperators
  };
};

export const getBaseIncidents = incidents => {
  let incidentsArray = Object.keys(incidents).map(key => incidents[key]);
  return {
    type: actionTypes.GET_BASE_INCIDENTS,
    baseIncidents: incidentsArray
  };
};
