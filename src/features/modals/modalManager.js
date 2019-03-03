import React from "react";
import { connect } from "react-redux";
import LoginModal from "./loginModal";

const modalLookup = {
  LoginModal
};

const ModalManager = ({ currentModal }) => {
  let renderedModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
};

const mapStateToProps = state => ({
  currentModal: state.modal
});

export default connect(mapStateToProps)(ModalManager);
