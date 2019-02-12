import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleSearch, toggleNavigation } from "../headerStore/headerActions";

import "./mobileButtons.sass";

class MobileButtons extends Component {
  render() {
    const { toggleNavigation, toggleSearch } = this.props;
    const { showNavigation, showSearch } = this.props.header;
    return (
      <div className="mobile_buttons">
        <a
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
        </a>
        <a
          onClick={toggleSearch}
          className={
            showSearch ? "search-button search-button-on" : "search-button"
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
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  header: state.header
});

export default connect(
  mapStateToProps,
  { toggleSearch, toggleNavigation }
)(MobileButtons);
