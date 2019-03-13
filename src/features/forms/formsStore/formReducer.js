import * as actionTypes from "./formsTypes";

const initialState = {
  changePlaneObject: {}
};

export default function(state = initialState, action) {
  console.log("hit reducer");
  switch (action.type) {
    case actionTypes.MODIFY_AIRPLANE_DATA:
      console.log(action);
      return {
        ...state
      };
    default:
      console.log("hit this for some reason");
      return state;
  }
}
