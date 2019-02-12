import React, { Component } from "react";
import Header from "../header/header";

class Airplanes extends Component {
  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <Header match={match} />
        <div>
          <h1>Airplanes</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Airplanes;
