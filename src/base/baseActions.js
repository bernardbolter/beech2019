import * as actionTypes from "./baseTypes";

export const getBaseAirplanes = airplanes => {
  let airplanesArrayRaw = Object.keys(airplanes).map(key => airplanes[key]);
  let airplanesArray = [];
  airplanesArrayRaw.map(plane => {
    if (plane.latestCountry !== "?" && plane.latestCountry !== undefined) {
      if (plane.latestCountry.charAt(0) === `(`) {
        plane.latestCountry = plane.latestCountry.slice(1, -1);
      }
    }

    if (plane.latestOperator !== "?" && plane.latestOperator !== undefined) {
      if (plane.latestOperator.charAt(0) === `(`) {
        plane.latestOperator = plane.latestOperator.slice(1, -1);
      }
    }

    airplanesArray.push(plane);
  });
  return {
    type: actionTypes.GET_BASE_AIRPLANES,
    baseAirplanes: airplanesArray
  };
};

export const getBaseIncidents = incidents => {
  let incidentsArray = Object.keys(incidents).map(key => incidents[key]);
  return {
    type: actionTypes.GET_BASE_INCIDENTS,
    baseIncidents: incidentsArray
  };
};

export const getBaseFacts = facts => {
  let factsArray = Object.keys(facts).map(key => facts[key]);
  return {
    type: actionTypes.GET_BASE_FACTS,
    baseFacts: factsArray
  };
};
