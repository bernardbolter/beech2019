import * as actionTypes from "./homeTypes";

const initialState = {
  homeDataLoaded: false,
  homeStatusData: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FILTER_HOME_DATA:
      console.log("pushing");
      return {
        ...state,
        homeDataLoaded: true
      };
    default:
      console.log("not pushing");
      return state;
  }
}
