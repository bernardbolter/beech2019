import * as actionTypes from "./modalTypes";

export const openModal = (modalType, modalProps, type) => {
  return {
    type: actionTypes.MODAL_OPEN,
    payload: {
      modalType,
      modalProps,
      type
    }
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.MODAL_CLOSE
  };
};
