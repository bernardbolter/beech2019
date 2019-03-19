import React from "react";
import { connect } from "react-redux";
import LoginModal from "./loginModal";
import EditAirplaneModal from "./editAirplaneModal";
import EditIncidentModal from "./editIncidentModal";

const modalLookup = {
  LoginModal,
  EditAirplaneModal,
  EditIncidentModal
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
