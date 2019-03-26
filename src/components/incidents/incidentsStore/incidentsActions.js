import * as actionTypes from "./incidentsTypes";

export const filterIncidents = (incidents, search) => {
  let allIncidents = incidents;

  let filteredIncidents = incidents.filter(field => {
    return field.editorialOrSupplemental !== "*Removed*";
  });

  filteredIncidents = filteredIncidents.sort(function(a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  if (search.incidentsNewerChecked) {
    filteredIncidents = filteredIncidents.reverse();
  }

  if (search.incidentsFatalitiesChecked) {
    filteredIncidents = filteredIncidents.filter(fate => {
      return fate.fatalities !== "0";
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
