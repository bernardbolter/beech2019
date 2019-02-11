import React, { Component } from "react";
import { connect } from "react-redux";

import { showSearch, showNavigation } from "../headerStore/headerActions";

import "./mobileButtons.sass";

class MobileButtons extends Component {
  render() {
    return (
      <div className="mobile_buttons">
        <a onClick={this.props.showNavigation} className="search-menu">
          menu
        </a>
        <a onClick={this.props.showSearch} className="">
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
  { showSearch, showNavigation }
)(MobileButtons);
