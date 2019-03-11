import React, { Component } from "react";
import { connect } from "react-redux";

import { closeModal } from "./modalStore/modalActions";
import LoginForm from "../auth/loginForm";
import LogoutForm from "../auth/logoutForm";

import "./modals.sass";

class LoginModal extends Component {
  render() {
    const { closeModal, auth } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <section className="modal-window">
        <div className="login-modal-window">
          <div className="modal-close" onClick={closeModal}>
            <p>close</p>
            <img src={`${process.env.PUBLIC_URL}/close_icon.png`} alt="Close" />
          </div>
          {authenticated ? <LogoutForm auth={auth} /> : <LoginForm />}
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
)(LoginModal);
