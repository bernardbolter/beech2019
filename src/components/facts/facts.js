import React, { Component } from "react";

import Header from "../header/header";

class Facts extends Component {
  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <Header match={match} />
        <h1>Facts</h1>
      </React.Fragment>
    );
  }
}

export default Facts;
