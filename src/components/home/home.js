import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore, isLoaded } from "react-redux-firebase";

import Header from "../header/header";
import HomeColumn from "./homeColumn";

import { filterHomeData } from "./homeStore/homeActions";
import { getBaseAirplanes, getBaseIncidents } from "../../base/baseActions";

import "./home.sass";

class Home extends Component {
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
    }
    if (this.props.baseData.baseIncidents.length === 0) {
      let incidentsRef = await this.props.firestore
        .collection("base")
        .doc("incidents");
      await incidentsRef
        .get()
        .then(doc => {
          if (!doc.exists) {
            console.log("No such document.");
          } else {
            this.props.getBaseIncidents(doc.data());
          }
        })
        .catch(err => {
          console.log("Error getting document".err);
        });
    }
    if (Object.keys(this.props.home.homeData).length === 0) {
      let homeObject = {};
      homeObject.airplanes = this.props.baseData.baseAirplanes;
      homeObject.incidents = this.props.baseData.baseIncidents;
      await this.props.filterHomeData(homeObject);
    }
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div>
          <Header match={this.props.match} />
        </div>
        <section
          className={this.props.openMobileNav ? "home home-open" : "home"}
        >
          <div className="home-text">
            <h1>
              Welcome to Beech1900.com! This website is an active database of
              information about this turboprop airline which was produced
              between 1984 and 2002. You'll find it a comprehensive and reliable
              provider of information, meant to be shared with my fellow
              aviation enthusiasts.
            </h1>
            <h1>
              In 2006, former Captain and aviation enthusiast Aaron Kahn came up
              with this idea and started keeping track of the movements and
              statuses of all the Beech 1900s. Aaron’s hope is that you’ll enjoy
              this website and share it with your friends.
            </h1>
            <p>below are the top rankings of the stats</p>
          </div>

          {this.props.home.homeDataLoaded ? (
            <div className="home-grid">
              <HomeColumn
                columnName="currentStatus"
                columnHeader="Current Status"
              />
              <HomeColumn
                columnName="airplaneProduction"
                columnHeader="Prod. Runs"
              />
              <HomeColumn
                columnName="latestOperator"
                columnHeader="Top Operators"
              />
              <HomeColumn
                columnName="latestCountry"
                columnHeader="Top Countries"
              />
              <HomeColumn columnName="serial" columnHeader="Serial Series" />
              <HomeColumn
                columnName="accidentType"
                columnHeader="Top Incident Type"
              />
            </div>
          ) : (
            <div>
              <h1>NO DATA</h1>
            </div>
          )}

          <div className="home-footer">
            <p>
              Beech1900.com | all rights reserved - {new Date().getFullYear()}
            </p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  home: state.home,
  baseData: state.baseData,
  base: state.firestore.ordered.base
});

export default compose(
  withFirestore,
  connect(
    mapStateToProps,
    { filterHomeData, getBaseAirplanes, getBaseIncidents }
  )
)(Home);
