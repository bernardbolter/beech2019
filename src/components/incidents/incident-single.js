import React from "react";
import { connect } from "react-redux";

import Header from "../header/header";

const IncidentSingle = props => {
  console.log(props);
  return (
    <React.Fragment>
      <Header match={props.match} />
      <section className="incident-single-wrap">
        <h1>Single Incident</h1>
      </section>
    </React.Fragment>
  );
};

export default IncidentSingle;
