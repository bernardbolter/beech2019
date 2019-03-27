import React from "react";
import { connect } from "react-redux";

import { closeModal } from "./modalStore/modalActions";

const IncidentPhotoModal = props => {
  const {
    closeModal,
    planeInfo: { url, operator }
  } = props;
  return (
    <section className="modal-window chart-window">
      <div className="chart-modal-window">
        <div className="chart-modal-image-wrap">
          <div className="modal-close" onClick={closeModal}>
            <p>close</p>
            <img src={`${process.env.PUBLIC_URL}/close_icon.png`} alt="Close" />
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/incident_photos/${url}`}
            alt={operator}
            className="chart-image"
          />
        </div>
      </div>
    </section>
  );
};

const actions = {
  closeModal
};

export default connect(
  null,
  actions
)(IncidentPhotoModal);
