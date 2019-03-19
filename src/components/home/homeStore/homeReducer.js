import * as actionTypes from "./homeTypes";

const initialState = {
  homeDataLoaded: false,
  homeData: {},
  showLogin: false,
  loginMessage: "",
  openReadMore: false
};

export default function(state = initialState, action) {
  switch (action.type) {
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
