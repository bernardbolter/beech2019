import * as actionTypes from "./homeTypes";

const initialState = {
  homeDataLoaded: false,
  homeData: {},
  showLogin: false,
  loginMessage: ""
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
    default:
      return state;
  }
}
