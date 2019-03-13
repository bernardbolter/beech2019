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
  return {
    type: actionTypes.MODAL_CLOSE
  };
};
