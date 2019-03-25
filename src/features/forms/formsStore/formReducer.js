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
      console.log(action.message);
      console.log(action.which);
      switch (action.which) {
        case "airplane update":
          console.log("doing it");
          return {
            ...state,
            editAirplaneFormMessage: action.message
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
