import React, { Component } from "react";
import { connect } from "react-redux";

import EditIncidentForm from "../forms/editIncidentForm";

import { closeModal } from "./modalStore/modalActions";

import "./modals.sass";

class EditIncidentModal extends Component {
  render() {
    const { closeModal } = this.props;
    return (
      <section className="modal-window">
        <div className="edit-airplane-modal-window">
          <div className="modal-close" onClick={closeModal}>
            <p>close</p>
            <img src={`${process.env.PUBLIC_URL}/close_icon.png`} alt="Close" />
          </div>
          <EditIncidentForm {...this.props} />
        </div>
      </section>
    );
  }
}

const actions = {
  closeModal
};

const mapState = state => ({
  auth: state.firebase.auth
});

export default connect(
  mapState,
  actions
)(EditIncidentModal);
