import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { showNewsletter } from "../headerStore/headerActions";

import Newsletter from "../newsletter/newsletter";
import "./nav.sass";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <a className="nav_close_menu">x</a>
        <Link to="/">home</Link>
        <Link to="/airplanes">airplanes</Link>
        <Link to="/incidents">incidents</Link>
        <Link to="/facts">facts</Link>
        <a onClick={this.props.showNewsletter}>newsletter</a>
        {this.props.header.showNewsletter ? <Newsletter /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  header: state.header
});

export default connect(
  mapStateToProps,
  { showNewsletter }
)(Nav);
