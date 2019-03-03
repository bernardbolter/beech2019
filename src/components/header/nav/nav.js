import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { toggleNewsletter } from "../headerStore/navActions";
import { withFirebase } from "react-redux-firebase";

import Newsletter from "../newsletter/newsletter";
import "./nav.sass";

class Nav extends Component {
  render() {
    const { auth } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    const { toggleNewsletter } = this.props;
    const { showNewsletter, showNavigation } = this.props.nav;
    return (
      <div className={showNavigation ? "nav nav-open" : "nav"}>
        <Link to="/">home</Link>
        <Link to="/airplanes">airplanes</Link>
        <Link to="/incidents">incidents</Link>
        <Link to="/facts">facts</Link>
        <p onClick={toggleNewsletter}>newsletter</p>
        {showNewsletter ? <Newsletter /> : null}
        {authenticated ? auth.email : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  auth: state.firebase.auth
});

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    { toggleNewsletter }
  )
)(Nav);
