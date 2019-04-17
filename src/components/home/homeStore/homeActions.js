import * as actionTypes from "./homeTypes";
import {
  changeAirplaneFilter,
  changeAirplaneDropdown,
  handleAirplaneReset
} from "../../header/headerStore/searchAirplanesActions";
import {
  incidentsSearchReset,
  changeIncidentsDropdown
} from "../../header/headerStore/searchIncidentsActions";

export const setAirplanes = planes => {
  return {
    type: actionTypes.SET_AIRPLANES,
    payload: planes
  };
};

export const setIncidents = incidents => {
  return {
    type: actionTypes.SET_INCIDENTS,
    payload: incidents
  };
};

export const filterHomeData = (planes, incidents) => {
  console.log(planes);
  const planesArray = Object.keys(planes).map(key => planes[key]);
  const incidentsArray = Object.keys(incidents).map(key => incidents[key]);
  let sortedData = {
    accidentCategory: [],
    status: [],
    latestCountry: [],
    latestOperator: []
  };

  incidentsArray.map(i => {
    if (
      i.accidentCategory !== "" &&
      i.accidentCategory !== undefined &&
      i.accidentCategory !== "Other" &&
      i.accidentCategory !== "No Data"
    ) {
      sortedData.accidentCategory.push(i.accidentCategory);
    }

    return null;
  });
  planesArray.map(a => {
    // status data
    if (a.status !== "?" && a.status !== undefined && a.status !== "no data") {
      sortedData.status.push(a.status);
    }
    // country data
    if (
      a.latestCountry !== "?" &&
      a.latestCountry !== undefined &&
      a.status === "Operating"
    ) {
      sortedData.latestCountry.push(a.latestCountry);
    }
    // operator data
    if (
      a.latestOperator !== "?" &&
      a.latestOperator !== undefined &&
      a.latestOperator !== "No Data" &&
      a.latestOperator !== "no data" &&
      a.latestOperator !== "not operating" &&
      a.status === "Operating"
    ) {
      sortedData.latestOperator.push(a.latestOperator);
    }
    // // serial data
    // if (a.Serial !== "?" && a.Serial !== undefined) {
    //   var shortSerial = a.Serial.substring(0, 2);
    //   sortedData.Serial.push(shortSerial);
    // }

    return null;
  });

  // sort the individual data into objects of 10 or less
  sortedData.accidentCategory = sortData(sortedData.accidentCategory);
  sortedData.status = sortData(sortedData.status);
  sortedData.latestCountry = sortData(sortedData.latestCountry);
  sortedData.latestOperator = sortData(sortedData.latestOperator);

  return {
    type: actionTypes.FILTER_HOME_DATA,
    data: sortedData
  };
};

const sortData = array => {
  array.sort();
  let theList = {};
  let finalList = [];
  // make object into an array of objects with key as value and value as count
  array.forEach(function(x) {
    theList[x] = (theList[x] || 0) + 1;
  });
  // order object for highest to lowest by count
  Object.keys(theList).forEach(key => {
    finalList.push({ name: key, count: theList[key] });
  });
  finalList.sort(function(a, b) {
    return b.count - a.count;
  });
  // reduce list to 10 or less
  finalList = finalList.slice(0, 10);
  return finalList;
};

export const toggleReadMore = () => {
  return {
    type: actionTypes.OPEN_READ_MORE
  };
};

export const decideHomePageLinks = (data, name) => {
  return async dispatch => {
    await dispatch(handleAirplaneReset());
    await dispatch(incidentsSearchReset());
    if (name === "status") {
      if (data.name === "Parted Out") {
        await dispatch(changeAirplaneFilter("partedOut"));
      }
      if (data.name === "Operating") {
        await dispatch(changeAirplaneFilter("operating"));
      }
      if (data.name === "Unknown") {
        await dispatch(changeAirplaneFilter("unknown"));
      }
      if (data.name === "Non-Flying") {
        await dispatch(changeAirplaneFilter("nonFlying"));
      }
      if (data.name === "Destroyed") {
        await dispatch(changeAirplaneFilter("destroyed"));
      }
    }
    if (name === "latestOperator") {
      await dispatch(changeAirplaneFilter("operating"));
      await dispatch(changeAirplaneDropdown(data.name, "operator"));
    }
    if (name === "latestCountry") {
      await dispatch(changeAirplaneDropdown(data.name, "opercountryator"));
      await dispatch(changeAirplaneFilter("operating"));
    }
    if (name === "accidentCategory") {
      await dispatch(changeIncidentsDropdown(data.name));
    }
  };
};
