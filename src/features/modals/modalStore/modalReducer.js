import * as actionTypes from "./modalTypes";

const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.MODAL_OPEN:
      const thisModalProps = {
        planeInfo: { ...action.payload.modalProps },
        type: action.payload.type
      };
      return {
        ...state,
        modalType: action.payload.modalType,
        modalProps: thisModalProps
      };
    case actionTypes.MODAL_CLOSE:
      return null;
    default:
      return state;
  }
}
