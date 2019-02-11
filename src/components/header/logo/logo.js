import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./logo.sass";

class Logo extends Component {
  render() {
    return (
      <div className={this._selectLogoClass()}>
        <Link to="/" className="logo_text_wrap">
          <p>BEECH</p>
          <p>1900</p>
        </Link>
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

export default Logo;
