import * as actionTypes from "./homeTypes";

const initialState = {
  homeDataLoaded: false,
  homeData: {},
  showLogin: false,
  loginEmail: "",
  loginPassword: "",
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
    case actionTypes.UPDATE_LOGIN_TEXT:
      return {
        ...state,
        [action.name]: action.value
      };
    case actionTypes.SUBMIT_LOGIN:
      return {
        ...state,
        loginAnswer: "login submitted"
      };
    case actionTypes.LOGIN_MESSAGE:
      console.log(action.message);
      return {
        ...state,
        loginAnswer: action.message
      };
    default:
      return state;
  }
}
