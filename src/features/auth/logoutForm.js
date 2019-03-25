import React from "react";
import { connect } from "react-redux";

import { logout } from "./authStore/authActions";

import "./log.sass";

const actions = {
  logout
};

const mapState = state => ({
  auth: state.firebase.auth
});

const LogoutForm = ({ logout, auth }) => {
  return (
    <div className="logout-form">
      <h2>logged in as {auth.email}</h2>
      <div className="modal-logout" onClick={logout}>
        <p>logout</p>
        <img src={`${process.env.PUBLIC_URL}/logout_icon.png`} alt="Logout" />
      </div>
    </div>
  );
};

export default connect(
  mapState,
  actions
)(LogoutForm);
