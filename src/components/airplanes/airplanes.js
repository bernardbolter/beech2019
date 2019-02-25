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
    if (this.props.header !== prevProps.header) {
      const {
        uaChecked,
        ubChecked,
        ucChecked,
        udChecked,
        ueChecked
      } = this.props.header;
      const allPlanes = this.props.baseData.baseAirplanes;
      const SerialArray = [];
      if (uaChecked) {
        SerialArray.push("A");
      }
      if (ubChecked) {
        SerialArray.push("B");
      }
      if (ucChecked) {
        SerialArray.push("C");
      }
      if (udChecked) {
        SerialArray.push("D");
      }
      if (ueChecked) {
        SerialArray.push("E");
      }
      let SerialString = SerialArray.join(", ");

      if (!uaChecked && !ubChecked && !ucChecked && !udChecked && !ueChecked) {
        SerialString = "A, B, C, D, E";
      }

      this.props.getUpdatedFilteredAirplanes(SerialString, allPlanes);
    }
  }

  render() {
    console.log(this.props);
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
                  this.props.airplanes.filteredAirplanes.map((plane, i) => (
                    <Airplane key={i} {...plane} />
                  ))
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
  header: state.header,
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
