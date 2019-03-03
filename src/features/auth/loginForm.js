import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "./authActions";

const actions = {
  login
};

const LoginForm = ({ login, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit(login)}>
      <div>
        <label htmlFor="email">email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: "loginForm" })(LoginForm));
