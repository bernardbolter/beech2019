import React, { Component } from "react";

import Nav from "./nav/nav";
import Logo from "./logo/logo";
import MobileButtons from "./mobileButtons/mobileButtons";
import Search from "./search/search";

import "./header.sass";

class Header extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="header">
        <div className="nav-container">
          <Nav match={match} />
          <Logo match={match} />
          <MobileButtons match={match} />
          <Search match={match} />
        </div>
      </div>
    );
  }
}

export default Header;
