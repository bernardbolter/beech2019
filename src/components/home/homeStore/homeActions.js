import * as actionTypes from "./homeTypes";
import {
  changeAirplaneFilter,
  changeAirplaneDropdown,
  handleAirplaneReset
} from "../../header/headerStore/searchAirplanesActions";

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
  const planesArray = Object.keys(planes).map(key => planes[key]);
  const incidentsArray = Object.keys(incidents).map(key => incidents[key]);
  let sortedData = {
    accidentCategory: [],
    status: [],
    currentCountry: [],
    currentOperator: [],
    serial: []
  };

  incidentsArray.map(i => {
    if (
      i.accidentCategory !== "" &&
      i.accidentCategory !== undefined &&
      i.accidentCategory !== "Other"
    ) {
      sortedData.accidentCategory.push(i.accidentCategory);
    }

    return null;
  });
  planesArray.map(a => {
    // status data
    if (a.status !== "?" && a.status !== undefined) {
      sortedData.status.push(a.status);
    }
    // country data
    if (a.currentCountry !== "?" && a.currentCountry !== undefined) {
      sortedData.currentCountry.push(a.currentCountry);
    }
    // operator data
    if (
      a.currentOperator !== "?" &&
      a.currentOperator !== undefined &&
      a.currentOperator !== "No Data" &&
      a.currentOperator !== "not operating"
    ) {
      sortedData.currentOperator.push(a.currentOperator);
    }
    // serial data
    if (a.serial !== "?" && a.serial !== undefined) {
      var shortSerial = a.serial.substring(0, 2);
      sortedData.serial.push(shortSerial);
    }

    return null;
  });

  // sort the individual data into objects of 10 or less
  sortedData.accidentCategory = sortData(sortedData.accidentCategory);
  sortedData.status = sortData(sortedData.status);
  sortedData.currentCountry = sortData(sortedData.currentCountry);
  sortedData.currentOperator = sortData(sortedData.currentOperator);
  sortedData.serial = sortData(sortedData.serial);

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
  console.log(data.name);
  return async dispatch => {
    await dispatch(handleAirplaneReset());
    if (name === "status") {
      if (data.name === "Parted Out") {
        console.log("parted");
        await dispatch(changeAirplaneFilter("partedOut"));
      }
      if (data.name === "Operating") {
        await dispatch(changeAirplaneFilter("operating"));
      }
      if (data.name === "Operating (Non-Current)") {
        await dispatch(changeAirplaneFilter("operatingNonCurrent"));
      }
      if (data.name === "Non-Flying") {
        await dispatch(changeAirplaneFilter("nonFlying"));
      }
      if (data.name === "Destroyed") {
        await dispatch(changeAirplaneFilter("destroyed"));
      }
    }
    if (name === "currentOperator") {
      await dispatch(changeAirplaneDropdown(data.name, "operator"));
    }
    if (name === "currentCountry") {
      await dispatch(changeAirplaneDropdown(data.name, "opercountryator"));
    }
    if (name === "serial") {
      const lowerSerial = data.name.toLowerCase();
      await dispatch(changeAirplaneFilter(lowerSerial));
    }
  };
};
