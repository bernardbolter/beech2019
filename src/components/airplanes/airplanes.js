import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";

import Header from "../header/header";
import Airplane from "./airplane";

import {
  getFilteredAirplanes,
  getUpdatedFilteredAirplanes
} from "./airplanesStore/airplanesActions";
import { getBaseAirplanes } from "../../base/baseActions";

import "./airplanes.sass";

class Airplanes extends Component {
  async componentDidMount() {
    if (this.props.baseData.baseAirplanes.length === 0) {
      let fireplanesRef = await this.props.firestore
        .collection("base")
        .doc("airplaneExcerpts");
      await fireplanesRef
        .get()
        .then(doc => {
          if (!doc.exists) {
            console.log("No such document.");
          } else {
            this.props.getBaseAirplanes(doc.data());
          }
        })
        .catch(err => {
          console.log("Error getting document".err);
        });
      this.props.getFilteredAirplanes(this.props.baseData.baseAirplanes);
    }
    if (this.props.airplanes.filteredAirplanes.length === 0) {
      await this.props.getFilteredAirplanes(this.props.baseData.baseAirplanes);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchAirplanes !== prevProps.searchAirplanes) {
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

      const allPlanes = this.props.baseData.baseAirplanes;

      this.props.getUpdatedFilteredAirplanes(
        serialString,
        statusString,
        country,
        operator,
        sorting,
        filterText,
        allPlanes
      );
    }
  }

  render() {
    console.log(this.props);
    const { match } = this.props;
    const { showSearch } = this.props.nav;
    return (
      <React.Fragment>
        <Header match={match} />
        <section
          id="airplanes"
          className={
            showSearch ? "airplanes airplanes-search-open" : "airplanes"
          }
        >
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

const mapStateToProps = state => ({
  searchAirplanes: state.searchAirplanes,
  nav: state.nav,
  airplanes: state.airplanes,
  base: state.firestore.ordered.base,
  baseData: state.baseData
});

export default compose(
  withFirestore,
  connect(
    mapStateToProps,
    { getFilteredAirplanes, getUpdatedFilteredAirplanes, getBaseAirplanes }
  )
)(Airplanes);
