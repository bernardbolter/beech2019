import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";

import Header from "../header/header";
import Airplane from "./airplane";

import { filterAirplanes } from "./airplanesStore/airplanesActions";
import { getCountriesAndOperators } from "../header/headerStore/searchAirplanesActions";

import "./airplanes.sass";

class Airplanes extends Component {
  async componentDidMount() {
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

        var source = snapshot.metadata.fromCache ? "local cache" : "server";
        console.log("Data came from " + source);
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

  getTheFilteredPlanes = thePlanes => {
    const {
      uaChecked,
      ubChecked,
      ucChecked,
      udChecked,
      ueChecked,
      airplanesOlderChecked,
      operatingChecked,
      operatingNonCurrentChecked,
      nonFlyingChecked,
      partedOutChecked,
      destroyedChecked,
      airplanesSearchText,
      airplanesLatestOperatorValue,
      airplanesCountryValue
    } = this.props.searchAirplanes;

    let serialArray = [];
    if (uaChecked) {
      serialArray.push("A");
    }
    if (ubChecked) {
      serialArray.push("B");
    }
    if (ucChecked) {
      serialArray.push("C");
    }
    if (udChecked) {
      serialArray.push("D");
    }
    if (ueChecked) {
      serialArray.push("E");
    }
    let serialString = serialArray.join(", ");

    if (!uaChecked && !ubChecked && !ucChecked && !udChecked && !ueChecked) {
      serialString = "A, B, C, D, E";
    }

    let statusArray = [];

    if (operatingChecked) {
      statusArray.push("O");
    }

    if (operatingNonCurrentChecked) {
      statusArray.push("O");
    }

    if (nonFlyingChecked) {
      statusArray.push("N");
    }

    if (partedOutChecked) {
      statusArray.push("P");
    }

    if (destroyedChecked) {
      statusArray.push("D");
    }

    let statusString = statusArray.join(", ");

    if (statusString === "") {
      statusString = "O, N, P, D";
    }

    const country = airplanesCountryValue;

    const operator = airplanesLatestOperatorValue;

    const sorting = airplanesOlderChecked;

    const filterText = airplanesSearchText;

    const allPlanes = thePlanes;

    this.props.getUpdatedFilteredAirplanes(
      serialString,
      statusString,
      country,
      operator,
      sorting,
      filterText,
      allPlanes
    );
  };

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
    console.log(this.props);
    const { match } = this.props;
    const { showSearch, showNavigation } = this.props.nav;
    return (
      <React.Fragment>
        <Header match={match} />
        <section id="airplanes" className={this.renderAirplaneClass()}>
          {this.props.airplanes.airplanesLoaded ? (
            <div>
              <section className="airplane-top-info">
                {this.props.airplanes.airplaneCount !== 0 ? (
                  <p>Viewing {this.props.airplanes.airplaneCount} Records</p>
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
                {!this.props.airplanes.filteredAirplanes.length ? (
                  <div className="no-incident">
                    <img
                      src={`${process.env.PUBLIC_URL}/b1900-logo.png`}
                      alt="BEECH 1900 Graphic"
                    />
                    <p>no airplanes were found in your search</p>
                  </div>
                ) : (
                  this.props.airplanes.filteredAirplanes.map((plane, i) => {
                    if (!plane.serial) {
                      return null;
                    } else {
                      return <Airplane key={i} {...plane} />;
                    }
                  })
                )}
              </div>
            </div>
          ) : (
            <h1>Airplanes</h1>
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
  getCountriesAndOperators
};

export default compose(
  withFirestore,
  connect(
    mapState,
    actions
  )
)(Airplanes);
