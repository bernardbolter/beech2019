import * as actionTypes from "./modalTypes";

export const openModal = (modalType, modalProps, type) => {
  console.log("modelling");
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
