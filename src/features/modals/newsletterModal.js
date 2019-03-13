import React, { Component } from "react";
import { connect } from "react-redux";

import { closeModal } from "./modalStore/modalActions";
import LoginForm from "../auth/loginForm";
import LogoutForm from "../auth/logoutForm";

import "./modals.sass";

class NewsletterModal extends Component {
  render() {
    const { closeModal } = this.props;
    return (
      <section className="modal-window">
        <div className="newsletter-modal-window">
          <div className="modal-close" onClick={closeModal}>
            <p>close</p>
            <img src={`${process.env.PUBLIC_URL}/close_icon.png`} alt="Close" />
          </div>
          <h1>Newsletter Modal</h1>
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
)(NewsletterModal);
