import * as actionTypes from "./modalTypes";

const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.MODAL_OPEN:
      return {
        ...state,
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps
      };
    case actionTypes.MODAL_CLOSE:
      console.log("reduce close");
      return null;
    default:
      return state;
  }
}
