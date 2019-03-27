import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";

import Header from "../header/header";
import Incident from "./incident";

import {
  filterIncidents,
  filterFirstIncidents
} from "./incidentsStore/incidentsActions";
import { getIncidentTypes } from "../header/headerStore/searchIncidentsActions";

import "./incidents.sass";

class Incidents extends Component {
  async componentDidMount() {
    let firedentsRef = await this.props.firestore
      .collection("base")
      .doc("incidents");
    await firedentsRef.onSnapshot(snapshot => {
      let snap = snapshot.data();
      let incidentsArray = Object.keys(snap).map(key => snap[key]);
      this.props.filterFirstIncidents(incidentsArray);
      if (this.props.searchIncidents.uniqueIncidents.length === 0) {
        this.props.getIncidentTypes(incidentsArray);
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchIncidents !== prevProps.searchIncidents) {
      this.props.filterIncidents(
        this.props.incidents.allIncidents,
        this.props.searchIncidents
      );
    }
  }

  render() {
    const { match } = this.props;
    const { showSearch, showNavigation } = this.props.nav;
    const {
      incidentsCount,
      filteredIncidents,
      incidentsLoaded
    } = this.props.incidents;
    console.log(this.props);
    return (
      <React.Fragment>
        <Header match={match} />
        <section
          id="incidents"
          className={
            (showSearch ? "incidents-search-on" : " incidents") +
            (showNavigation ? " incidents-nav-on" : " incidents")
          }
        >
          {incidentsLoaded ? (
            <div className="incident-data">
              <section className="incidents-top-info">
                {incidentsCount !== 0 ? (
                  <p>Viewing {incidentsCount} Records</p>
                ) : (
                  <p>There are no incident results for your search.</p>
                )}
              </section>
              <section className="incidents-wrap">
                <div className="incidents-headers">
                  <div className="inc-date-header">
                    <p>Date</p>
                  </div>
                  <div className="inc-serial-header">
                    <p>Serial</p>
                  </div>
                  <div className="inc-reg-header">
                    <p>Reg</p>
                  </div>
                  <div className="inc-operator-header">
                    <p>Operator</p>
                  </div>
                  <div className="inc-airport-header">
                    <p>Airport</p>
                  </div>
                  <div className="inc-city-header">
                    <p>City</p>
                  </div>
                  <div className="inc-fatalities-header">
                    <p>Fatalities</p>
                  </div>
                  <div className="inc-photos-header">
                    <img
                      src={`${process.env.PUBLIC_URL}/white_camera.png`}
                      alt="Camera Icon"
                    />
                  </div>
                </div>
              </section>
              {!filteredIncidents.length ? (
                <div className="no-incident">
                  <img
                    src={`${process.env.PUBLIC_URL}/b1900-logo.png`}
                    alt="BEECH 1900 Graphic"
                  />
                  <p>no incidents were found in your search</p>
                </div>
              ) : (
                filteredIncidents.map((incident, i) => {
                  return <Incident key={i} {...incident} evenOdd={i} />;
                })
              )}
            </div>
          ) : (
            <h1>Loading Incidents....</h1>
          )}
        </section>
      </React.Fragment>
    );
  }
}

const mapState = state => ({
  nav: state.nav,
  searchIncidents: state.searchIncidents,
  incidents: state.incidents
});

const actions = {
  filterFirstIncidents,
  filterIncidents,
  getIncidentTypes
};

export default compose(
  withFirestore,
  connect(
    mapState,
    actions
  )
)(Incidents);
