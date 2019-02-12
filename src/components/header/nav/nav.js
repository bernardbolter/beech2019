import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleNewsletter } from "../headerStore/headerActions";

import Newsletter from "../newsletter/newsletter";
import "./nav.sass";

class Nav extends Component {
  render() {
    const { toggleNewsletter } = this.props;
    const { showNewsletter, showNavigation } = this.props.header;
    return (
      <div className={showNavigation ? "nav nav-open" : "nav"}>
        <Link to="/">home</Link>
        <Link to="/airplanes">airplanes</Link>
        <Link to="/incidents">incidents</Link>
        <Link to="/facts">facts</Link>
        <p onClick={toggleNewsletter}>newsletter</p>
        {showNewsletter ? <Newsletter /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  header: state.header
});

export default connect(
  mapStateToProps,
  { toggleNewsletter }
)(Nav);
