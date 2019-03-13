import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirebase } from "react-redux-firebase";

import { openModal } from "../../../features/modals/modalStore/modalActions";
import "./nav.sass";

class Nav extends Component {
  render() {
    const { auth, openModal } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    const { showNavigation } = this.props.nav;
    return (
      <div className={showNavigation ? "nav nav-open" : "nav"}>
        <Link to="/">home</Link>
        <Link to="/airplanes">airplanes</Link>
        <Link to="/incidents">incidents</Link>
        <Link to="/facts">facts</Link>
        <p onClick={() => openModal("NewsletterModal")}>newsletter</p>
        {authenticated ? (
          <p onClick={() => openModal("LoginModal")}>{auth.email}</p>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  auth: state.firebase.auth
});

const actions = {
  openModal
};

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    actions
  )
)(Nav);
