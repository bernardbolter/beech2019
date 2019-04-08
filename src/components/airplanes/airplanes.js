import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";

import Header from "../header/header";
import Airplane from "./airplane";

import { filterAirplanes } from "./airplanesStore/airplanesActions";
import {
  getCountriesAndOperators,
  handleAirplaneReset
} from "../header/headerStore/searchAirplanesActions";

import "./airplanes.sass";

class Airplanes extends Component {
  async componentDidMount() {
    window.scrollTo(0, 0);
    let fireplanesRef = await this.props.firestore
      .collection("base")
      .doc("airplaneExcerpts");
    await fireplanesRef.onSnapshot(
      { includeMetadataChanges: true },
      snapshot => {
        let snap = snapshot.data();
        let airplanesArray = Object.keys(snap).map(key => snap[key]);
        this.props.filterAirplanes(airplanesArray, this.props.searchAirplanes);
        this.props.getCountriesAndOperators(airplanesArray);
      }
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchAirplanes !== prevProps.searchAirplanes) {
      this.props.filterAirplanes(
        this.props.airplanes.allPlanes,
        this.props.searchAirplanes
      );
    }
  }

  renderAirplaneClass = () => {
    const { showSearch, showNavigation } = this.props.nav;
    if (showNavigation) {
      return "airplanes airplanes-nav-open";
    } else if (showSearch) {
      return "airplanes airplanes-search-open";
    } else {
      return "airplanes";
    }
  };

  render() {
    const { match } = this.props;
    const {
      airplaneCount,
      airplanesLoaded,
      filteredAirplanes
    } = this.props.airplanes;
    return (
      <React.Fragment>
        <Header match={match} />
        <section id="airplanes" className={this.renderAirplaneClass()}>
          {airplanesLoaded ? (
            <div>
              <section className="airplane-top-info">
                {airplaneCount !== 0 ? (
                  <p>Viewing {airplaneCount} Records</p>
                ) : (
                  <p>There are no aiplane results for your search.</p>
                )}
              </section>
              <div className="airplane-data-wrapper">
                <section className="airplane-data-headers">
                  <div className="serial-header">
                    <p>Serial</p>
                  </div>
                  <div className="date-made-header">
                    <p>Prod. Date</p>
                  </div>
                  <div className="current-status-header">
                    <p>Status</p>
                  </div>
                  <div className="registration-header">
                    <p>Current Reg.</p>
                  </div>
                  <div className="latest-operator-header">
                    <p>Current Operator</p>
                  </div>
                  <div className="country-header">
                    <p>Current Country</p>
                  </div>
                </section>
                {!filteredAirplanes.length ? (
                  <div className="no-incident">
                    <img
                      src={`${process.env.PUBLIC_URL}/b1900-logo.png`}
                      alt="BEECH 1900 Graphic"
                    />
                    <p>no airplanes were found in your search</p>
                  </div>
                ) : (
                  filteredAirplanes.map((plane, i) => {
                    if (!plane.serial) {
                      return null;
                    } else {
                      return <Airplane key={i} {...plane} evenOdd={i} />;
                    }
                  })
                )}
              </div>
            </div>
          ) : (
            <div className="airplanes-no-data">
              <h1>Loading Airplane Data </h1>
              <img
                src={`${process.env.PUBLIC_URL}/three-dots.gif`}
                alt="animates dots"
              />
            </div>
          )}
        </section>
      </React.Fragment>
    );
  }
}

const mapState = state => ({
  searchAirplanes: state.searchAirplanes,
  nav: state.nav,
  airplanes: state.airplanes
});

const actions = {
  filterAirplanes,
  getCountriesAndOperators,
  handleAirplaneReset
};

export default compose(
  withFirestore,
  connect(
    mapState,
    actions
  )
)(Airplanes);
