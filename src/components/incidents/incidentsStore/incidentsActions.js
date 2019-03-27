import * as actionTypes from "./incidentsTypes";

export const filterFirstIncidents = incidents => {
  let firstIncidents = incidents.filter(field => {
    return field.editorialOrSupplemental !== "*Removed*";
  });

  const MONTHS = {
    jan: 1,
    feb: 2,
    mar: 3,
    apr: 4,
    may: 5,
    jun: 6,
    jul: 7,
    aug: 8,
    sep: 9,
    oct: 10,
    nov: 11,
    dec: 12
  };

  firstIncidents = firstIncidents.sort(function(a, b) {
    var aa = a.date.split("-"),
      bb = b.date.split("-");
    if (parseInt(aa[2]) < 50) {
      var aaa = `20${aa[2]}`;
    } else {
      aaa = `19${aa[2]}`;
    }
    if (parseInt(bb[2]) < 50) {
      var bbb = `20${bb[2]}`;
    } else {
      bbb = `19${bb[2]}`;
    }

    return aaa - bbb || MONTHS[aa[1]] - MONTHS[bb[1]] || aaa[0] - bbb[0];
  });

  firstIncidents = firstIncidents.reverse();

  return {
    type: actionTypes.FIRST_INCIDENTS,
    firstIncidents
  };
};

export const filterIncidents = (incidents, search) => {
  let allIncidents = incidents;
  let filteredIncidents = incidents;

  if (search.incidentsOlderChecked) {
    filteredIncidents = filteredIncidents.reverse();
  }

  if (search.incidentsFatalitiesChecked) {
    filteredIncidents = filteredIncidents.filter(fate => {
      return fate.fatalities !== "0" && fate.fatalities !== "No Data";
    });
  }

  if (
    search.incidentsCategory !== "" &&
    search.incidentsCategory !== "Select Accident Type"
  ) {
    filteredIncidents = filteredIncidents.filter(inc => {
      return inc.accidentCategory === search.incidentsCategory;
    });
  }

  if (search.incidentSearchText !== "") {
    const matchFilter = new RegExp(search.incidentSearchText, "i");
    filteredIncidents = filteredIncidents.filter(
      inc =>
        !search.incidentSearchText ||
        matchFilter.test(inc.locationCity) ||
        matchFilter.test(inc.locationAirport) ||
        matchFilter.test(inc.operator) ||
        matchFilter.test(inc.registration)
    );
  }

  return {
    type: actionTypes.FILTER_INCIDENTS,
    filteredIncidents,
    allIncidents
  };
};
