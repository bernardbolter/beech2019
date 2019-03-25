import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "./authStore/authActions";

import "./log.sass";

const LoginForm = ({ login, handleSubmit, loginState }) => {
  console.log(loginState);
  return (
    <form onSubmit={handleSubmit(login)} className="login-form">
      <div className="login-input">
        <label htmlFor="email">email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div className="login-input">
        <label htmlFor="password">password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button className="login-button" type="submit">
        submit
      </button>
      <div className="login-message">{loginState.loginMessage}</div>
    </form>
  );
};

const mapState = state => ({
  loginState: state.loginState
});

const actions = {
  login
};

export default connect(
  mapState,
  actions
)(reduxForm({ form: "loginForm" })(LoginForm));
