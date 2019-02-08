import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleNewsletter } from "../../../store/actions/newsletterActions";

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
        <a onClick={this._newsletterClick}>newsletter</a>
        {this.props.newsletter.openNewsletter ? <Newsletter /> : null}
      </div>
    );
  }

  _newsletterClick = () => {
    this.props.toggleNewsletter();
  };
}

const mapStateToProps = state => ({
  newsletter: state.store.newsletter
});

export default connect(
  mapStateToProps,
  { toggleNewsletter }
)(Nav);
