import React, { Component } from "react";

import AirplaneSearch from "./airplaneSearch";
import IncidentSearch from "./incidentSearch";

class Search extends Component {
  render() {
    console.log(this.props);

    return <React.Fragment>{this.decideSearch()}</React.Fragment>;
  }
  decideSearch = () => {
    if (this.props.match.path === "/airplanes") {
      return <AirplaneSearch />;
    } else if (this.props.match.path === "/incidents") {
      return <IncidentSearch />;
    } else {
      return <React.Fragment />;
    }
  };
}

export default Search;
