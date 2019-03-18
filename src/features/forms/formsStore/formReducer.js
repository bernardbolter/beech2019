import { SEND_MESSAGE } from "./formsTypes";

const initialState = {
  changePlaneObject: {},
  editAirplaneFormMessage: "",
  editIncidentFormMessage: "",
  uploadIncidentImageMessage: "",
  deleteIncidentImageMessage: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      switch (action.which) {
        case "update airplane":
          return {
            ...state,
            editAirplaneFormMessage: action.payload
          };
        case "update incident":
          return {
            ...state,
            editIncidentFormMessage: action.message
          };
        case "upload photo":
          return {
            ...state,
            uploadIncidentImageMessage: action.message
          };
        case "delete photo":
          return {
            ...state,
            deleteIncidentImageMessage: action.message
          };
        default:
          return state;
      }
    default:
      return state;
  }
}
