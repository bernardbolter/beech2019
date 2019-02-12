import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../header/header";

import "./incidents.sass";

class Incidents extends Component {
  render() {
    const { match } = this.props;
    const { showSearch } = this.props.header;
    return (
      <React.Fragment>
        <Header match={match} />
        <section
          id="incidents"
          className={showSearch ? "incidents incidents-search-on" : "incidents"}
        >
          <h1>Incidents</h1>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  header: state.header
});

export default connect(mapStateToProps)(Incidents);
