import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleNewsletter } from "../headerStore/headerActions";

import Newsletter from "../newsletter/newsletter";
import "./nav.sass";

class Nav extends Component {
  render() {
    const { toggleNewsletter } = this.props;
    const { showNewsletter } = this.props.header;
    return (
      <div className="nav">
        <a className="nav_close_menu">x</a>
        <Link to="/">home</Link>
        <Link to="/airplanes">airplanes</Link>
        <Link to="/incidents">incidents</Link>
        <Link to="/facts">facts</Link>
        <a onClick={toggleNewsletter}>newsletter</a>
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
