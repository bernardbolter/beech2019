import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  toggleMobileNav,
  toggleMobileSearch
} from "../../../store/actions/navActions";

import "./logo.sass";

class Logo extends Component {
  render() {
    return (
      <div className={this._selectLogoClass()}>
        <Link to="/" className="logo_text_wrap">
          <p>BEECH</p>
          <p>1900</p>
        </Link>
        <div className="mobile_buttons">
          <a onClick={this.props.toggleMobileNav} className="search-menu">
            menu
          </a>
          <a
            onClick={this.props.toggleMobileSearch}
            className={this._searchClass()}
          >
            <svg
              className="search-svg search-svg-on"
              id="search-svg"
              height="30px"
              width="30px"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line id="search-svg-left-line" x1={11} y1={12} x2={19} y2={19} />
              <line
                id="search-svg-right-line"
                x1={19}
                y1={12}
                x2={11}
                y2={19}
              />
              <circle
                id="search-svg-circle"
                cx="15"
                cy="15"
                r="10"
                fill="transparent"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  _selectLogoClass = () => {
    if (this.props.match.path === "/") {
      return "logo logo-home";
    } else {
      return "logo";
    }
  };

  _searchClass = () => {
    if (this.props.match.path === "/facts" || this.props.match.path === "/") {
      return "search-button-hide";
    } else if (this.props.store.searchButton === true) {
      return "search-button search-button-on";
    } else {
      return "search-button";
    }
  };
}

const mapStateToProps = state => ({
  nav: state.store.nav
});

export default connect(
  mapStateToProps,
  { toggleMobileNav, toggleMobileSearch }
)(Logo);
