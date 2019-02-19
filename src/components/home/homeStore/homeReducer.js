import * as actionTypes from "./homeTypes";

const initialState = {
  homeDataLoaded: false,
  homeData: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FILTER_HOME_DATA:
      return {
        ...state,
        homeData: action.data,
        homeDataLoaded: true
      };
    default:
      return state;
  }
}
