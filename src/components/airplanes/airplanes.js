import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../header/header";

import "./airplanes.sass";

class Airplanes extends Component {
  render() {
    const { match } = this.props;
    const { showSearch } = this.props.header;
    return (
      <React.Fragment>
        <Header match={match} />
        <section
          id="airplanes"
          className={
            showSearch ? "airplanes airplanes-search-open" : "airplanes"
          }
        >
          <h1>Airplanes</h1>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  header: state.header
});

export default connect(mapStateToProps)(Airplanes);
