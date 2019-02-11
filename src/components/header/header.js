import React, { Component } from "react";

import Nav from "./nav/nav";
import Logo from "./logo/logo";
import MobileButtons from "./mobileButtons/mobileButtons";

import "./header.sass";

class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="header">
        <div className="nav-container">
          <Nav match={this.props.match} />
          <Logo match={this.props.match} />
          <MobileButtons />
        </div>
      </div>
    );
  }
}

export default Header;
