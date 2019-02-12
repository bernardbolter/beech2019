import React, { Component } from "react";

import Header from "../header/header";

class Incidents extends Component {
  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <Header match={match} />
        <h1>Incidents</h1>
      </React.Fragment>
    );
  }
}

export default Incidents;
