import * as actionTypes from "./airplanesTypes";

export const filterAirplanes = (airplanes, search) => {
  let allAirplanes = airplanes;
  let filteredAirplanes = airplanes.sort(function(a, b) {
    return a.id - b.id;
  });

  let serialArray = [];

  if (search.uaChecked) {
    serialArray.push("A");
  }
  if (search.ubChecked) {
    serialArray.push("B");
  }
  if (search.ucChecked) {
    serialArray.push("C");
  }
  if (search.udChecked) {
    serialArray.push("D");
  }
  if (search.ueChecked) {
    serialArray.push("E");
  }
  let serialString = serialArray.join(", ");

  if (
    !search.uaChecked &&
    !search.ubChecked &&
    !search.ucChecked &&
    !search.udChecked &&
    !search.ueChecked
  ) {
    serialString = "A, B, C, D, E";
  }

  const serialRegEx = new RegExp(`^U[${serialString}]`);

  filteredAirplanes = filteredAirplanes.filter(plane =>
    serialRegEx.test(plane.serial)
  );

  let statusArray = [];

  if (search.operatingChecked) {
    statusArray.push("O");
  }

  if (search.nonFlyingChecked) {
    statusArray.push("N");
  }

  if (search.partedOutChecked) {
    statusArray.push("P");
  }

  if (search.destroyedChecked) {
    statusArray.push("D");
  }

  if (search.unknownChecked) {
    statusArray.push("U");
  }

  let statusString = statusArray.join(", ");

  if (statusString === "") {
    statusString = "O, N, P, D, U";
  }

  const statusRegEx = new RegExp(`^[${statusString}]`);

  filteredAirplanes = filteredAirplanes.filter(plane =>
    statusRegEx.test(plane.status)
  );

  if (
    search.airplanesOperatorValue !== "" &&
    search.airplanesOperatorValue !== "Select Operator"
  ) {
    filteredAirplanes = filteredAirplanes.filter(plane => {
      return plane.currentOperator === search.airplanesOperatorValue;
    });
  }

  if (
    search.airplanesCountryValue !== "" &&
    search.airplanesCountryValue !== "Select Country"
  ) {
    filteredAirplanes = filteredAirplanes.filter(plane => {
      return plane.currentCountry === search.airplanesCountryValue;
    });
  }

  if (search.airplanesNewerChecked) {
    filteredAirplanes = filteredAirplanes.reverse();
  }

  if (search.airplanesSearchText !== "") {
    const matchesFilter = new RegExp(search.airplanesSearchText, "i");
    filteredAirplanes = filteredAirplanes.filter(
      plane =>
        !search.airplanesSearchText ||
        matchesFilter.test(plane.serial) ||
        matchesFilter.test(plane.currentReg)
    );
  }

  return {
    type: actionTypes.GET_FILTER_AIRPLANES,
    filteredAirplanes,
    allAirplanes
  };
};
