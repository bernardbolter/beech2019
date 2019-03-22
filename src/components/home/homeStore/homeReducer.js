import * as actionTypes from "./homeTypes";

const initialState = {
  homeDataLoaded: false,
  homeData: {},
  homePlanes: {},
  homeIncidents: {},
  showLogin: false,
  loginMessage: "",
  openReadMore: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_AIRPLANES:
      console.log(action.payload);
      return {
        ...state,
        homePlanes: action.payload
      };
    case actionTypes.SET_INCIDENTS:
      return {
        ...state,
        homeIncidents: action.payload
      };
    case actionTypes.FILTER_HOME_DATA:
      return {
        ...state,
        homeData: action.data,
        homeDataLoaded: true
      };
    case actionTypes.TOGGLE_LOGIN:
      return {
        ...state,
        showLogin: !state.showLogin
      };
    case actionTypes.LOGIN_MESSAGE:
      return {
        ...state,
        loginAnswer: action.message
      };
    case actionTypes.OPEN_READ_MORE:
      return {
        ...state,
        openReadMore: !state.openReadMore
      };
    default:
      return state;
  }
}
