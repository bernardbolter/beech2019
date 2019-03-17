import { SEND_MESSAGE } from "./formsTypes";

const initialState = {
  changePlaneObject: {},
  editAirplaneFormMessage: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        editAirplaneFormMessage: action.payload
      };
    default:
      return state;
  }
}
