import React, { Component } from "react";
import { connect } from "react-redux";

import { closeModal } from "./modalStore/modalActions";
import LoginForm from "../auth/loginForm";

import "./modals.sass";

class LoginModal extends Component {
  render() {
    const { closeModal } = this.props;
    return (
      <section className="modal-window">
        <div className="login-modal-window">
          <div className="modal-close" onClick={closeModal}>
            <p>close</p>
            <img src={`${process.env.PUBLIC_URL}/close_icon.png`} alt="Close" />
          </div>
          <LoginForm />
        </div>
      </section>
    );
  }
}

const actions = {
  closeModal
};

export default connect(
  null,
  actions
)(LoginModal);
