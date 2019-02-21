import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";

import Header from "../header/header";
import Airplane from "./airplane";

import { airplanesHaveBeenLoaded } from "./airplanesStore/airplanesActions";
import { getBaseAirplanes } from "../../base/baseActions";

import "./airplanes.sass";

class Airplanes extends Component {
  componentDidMount() {
    if (this.props.baseData.baseAirplanes) {
      console.log("hit base data");
      this.props.airplanesHaveBeenLoaded(this.props.baseData.baseAirplanes);
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.base !== prevProps.base) {
      console.log("hit firestore");
      await this.props.getBaseAirplanes(this.props.base[0]);
      this.props.airplanesHaveBeenLoaded(this.props.baseData.baseAirplanes);
    }
  }

  render() {
    const { match } = this.props;
    const { showSearch } = this.props.header;
    console.log(this.props);
    return (
      <React.Fragment>
        <Header match={match} />
        <section
          id="airplanes"
          className={
            showSearch ? "airplanes airplanes-search-open" : "airplanes"
          }
        >
          {this.props.airplanes.airplanesLoaded && isLoaded(this.props.base) ? (
            <div>
              <section className="airplane-top-info">
                {this.renderAirplaneCount()}
              </section>
              <div className="airplane-data-wrapper">
                <section className="airplane-data-headers">
                  <div className="serial-header">
                    <p>Serial #</p>
                  </div>
                  <div className="current-status-header">
                    <p>Current Status</p>
                  </div>
                  <div className="date-made-header">
                    <p>Date Made</p>
                  </div>
                  <div className="registration-header">
                    <p>Registration</p>
                  </div>
                  <div className="latest-operator-header">
                    <p>Latest Operator</p>
                  </div>
                  <div className="country-header">
                    <p>Country</p>
                  </div>
                </section>
                {this.renderAirplaneExcerpts()}
              </div>
            </div>
          ) : (
            <h1>Airplanes</h1>
          )}
        </section>
      </React.Fragment>
    );
  }

  renderAirplaneExcerpts = () => {
    if (!this.props.airplanes.filteredAirplanes.length) {
      return (
        <div className="no-incident">
          <img
            src={`${process.env.PUBLIC_URL}/b1900-logo.png`}
            alt="BEECH 1900 Graphic"
          />
          <p>no airplanes were found in your search</p>
        </div>
      );
    } else {
      return this.props.airplanes.filteredAirplanes.map(plane => (
        <Airplane key={plane.id} {...plane} />
      ));
    }
  };

  renderAirplaneCount = () => {
    if (this.props.airplanes.airplaneCount) {
      return <p>Viewing {this.props.airplanes.airplaneCount} Records</p>;
    } else {
      return <p>There are no aiplane results for your search.</p>;
    }
  };
}

const mapStateToProps = state => ({
  header: state.header,
  airplanes: state.airplanes,
  base: state.firestore.ordered.base,
  baseData: state.baseData
});

export default compose(
  firestoreConnect([{ collection: "base" }]),
  connect(
    mapStateToProps,
    { airplanesHaveBeenLoaded, getBaseAirplanes }
  )
)(Airplanes);
