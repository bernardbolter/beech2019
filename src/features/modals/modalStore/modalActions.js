import * as actionTypes from "./modalTypes";

export const openModal = (modalType, modalProps) => {
  return {
    type: actionTypes.MODAL_OPEN,
    payload: {
      modalType,
      modalProps
    }
  };
};

export const closeModal = () => {
  console.log("closing");
  return {
    type: actionTypes.MODAL_CLOSE
  };
};
