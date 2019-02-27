import * as actionTypes from "./homeTypes";

export const filterHomeData = homeData => {
  let sortedData = {
    accidentType: [],
    currentStatus: [],
    airplaneProduction: [],
    latestCountry: [],
    latestOperator: [],
    serial: []
  };

  homeData.incidents.map(i => sortedData.accidentType.push(i.accidentType));
  homeData.airplanes.map(a => {
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

export const toggleLogin = () => {
  return {
    type: actionTypes.TOGGLE_LOGIN
  };
};

export const updateLoginText = event => {
  return {
    type: actionTypes.UPDATE_LOGIN_TEXT,
    name: event.target.name,
    value: event.target.value
  };
};

export const sendLoginMessage = message => {
  return {
    type: actionTypes.LOGIN_MESSAGE,
    message: message
  };
};

export const submitLogin = (e, email, password) => {
  e.preventDefault();
  console.log("hit that form");
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
      dispatch(sendLoginMessage(error.message));
    }
  };
};
