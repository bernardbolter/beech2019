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
  console.log(planesArray);
  const incidentsArray = Object.keys(incidents).map(key => incidents[key]);
  console.log(incidentsArray);
  let sortedData = {
    accidentType: [],
    currentStatus: [],
    airplaneProduction: [],
    latestCountry: [],
    latestOperator: [],
    serial: []
  };

  incidentsArray.map(i => sortedData.accidentType.push(i.accidentType));
  planesArray.map(a => {
    // status data
    if (a.currentStatus !== "?" && a.currentStatus !== undefined) {
      sortedData.currentStatus.push(a.currentStatus);
    }
    // production run data
    if (a.factoryDate !== "?" && a.factoryDate !== undefined) {
      var theYear = a.factoryDate.slice(-2);
      if (theYear.charAt(0) === ("0" || "1")) {
        theYear = "20" + theYear;
      } else {
        theYear = "19" + theYear;
      }
      sortedData.airplaneProduction.push(theYear);
    }
    // country data
    if (a.latestCountry !== "?" && a.latestCountry !== undefined) {
      sortedData.latestCountry.push(a.latestCountry);
    }
    // operator data
    if (a.latestOperator !== "?" && a.latestOperator !== undefined) {
      sortedData.latestOperator.push(a.latestOperator);
    }
    // serial data
    if (a.serial !== "?" && a.serial !== undefined) {
      var shortSerial = a.serial.substring(0, 2);
      sortedData.serial.push(shortSerial);
    }

    return null;
  });

  // sort the individual data into objects of 10 or less
  sortedData.accidentType = sortData(sortedData.accidentType);
  sortedData.currentStatus = sortData(sortedData.currentStatus);
  sortedData.airplaneProduction = sortData(sortedData.airplaneProduction);
  sortedData.latestCountry = sortData(sortedData.latestCountry);
  sortedData.latestOperator = sortData(sortedData.latestOperator);
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
  return async dispatch => {
    await dispatch(handleAirplaneReset());
    if (name === "currentStatus") {
      if (data.name === "Parted Out") {
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
    if (name === "latestOperator") {
      await dispatch(changeAirplaneDropdown(data.name, "operator"));
    }
    if (name === "latestCountry") {
      await dispatch(changeAirplaneDropdown(data.name, "opercountryator"));
    }
    if (name === "serial") {
      const lowerSerial = data.name.toLowerCase();
      await dispatch(changeAirplaneFilter(lowerSerial));
    }
  };
};
