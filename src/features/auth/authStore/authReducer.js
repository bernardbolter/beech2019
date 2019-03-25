import * as actionTypes from "./authTypes";

const initialState = {
  loginMessage: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_MESSAGE:
      return {
        ...state,
        loginMessage: action.message
      };
    default:
      return state;
  }
}
