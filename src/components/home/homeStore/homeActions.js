import * as actionTypes from "./homeTypes";

export const filterHomeData = data => {
  let sortedData = {
    accidentType: [],
    currentStatus: [],
    airplaneProduction: [],
    latestCountry: [],
    latestOperator: [],
    serial: []
  };

  // put the data into 6 individual objects
  Object.values(data[2]).map(i => sortedData.accidentType.push(i.accidentType));
  Object.values(data[0]).map(a => {
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
      if (a.latestCountry.charAt(0) === `(`) {
        sortedData.latestCountry.push(a.latestCountry.slice(1, -1));
      }
      sortedData.latestCountry.push(a.latestCountry);
    }

    // operator data
    if (a.latestOperator !== "?" && a.latestOperator !== undefined) {
      if (a.latestOperator.charAt(0) === `(`) {
        var noOp = a.latestOperator.slice(1, -1);
        sortedData.latestOperator.push(noOp);
      }
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
