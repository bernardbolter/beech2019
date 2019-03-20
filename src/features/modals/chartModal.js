import React from "react";
import { connect } from "react-redux";

import { closeModal } from "./modalStore/modalActions";

const ChartModal = props => {
  const {
    closeModal,
    planeInfo: { image, name }
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
            src={`${process.env.PUBLIC_URL}/${image}`}
            alt={name}
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
)(ChartModal);
