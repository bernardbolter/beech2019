import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleSearch, toggleNavigation } from "../headerStore/navActions";

import "./mobileButtons.sass";

class MobileButtons extends Component {
  render() {
    const { toggleNavigation, toggleSearch, match } = this.props;
    const { showNavigation, showSearch } = this.props.nav;
    return (
      <div className="mobile_buttons">
        <div
          onClick={toggleNavigation}
          className={showNavigation ? "nav-button nav-button-on" : "nav-button"}
        >
          <svg
            className="nav-svg nav-svg-on"
            id="nav-svg"
            height="30px"
            weight="30px"
            viewBox="0 0 30 30"
            xmlns="https://www.w3.org/2000/svg"
          >
            <line id="nav-svg-line-top" x1={4} y1={8} x2={26} y2={8} />
            <line id="nav-svg-line-mid" x1={4} y1={15} x2={26} y2={15} />
            <line id="nav-svg-line-bot" x1={4} y1={22} x2={26} y2={22} />
          </svg>
        </div>
        <div
          onClick={toggleSearch}
          className={
            (match.path === "/" ||
            match.path === "/facts" ||
            match.path === "/airplanes/:serial"
              ? "search-button-hide "
              : "") +
            (showSearch ? "search-button search-button-on" : "search-button")
          }
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
            <line id="search-svg-right-line" x1={19} y1={12} x2={11} y2={19} />
            <circle
              id="search-svg-circle"
              cx="15"
              cy="15"
              r="10"
              fill="transparent"
            />
          </svg>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(
  mapStateToProps,
  { toggleSearch, toggleNavigation }
)(MobileButtons);
