import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";

import Header from "../header/header";
import Incident from "./incident";

import {
  getFilteredIncidents,
  getUpdatedFilteredIncidents
} from "./incidentsStore/incidentsActions";
import { getBaseIncidents } from "../../base/baseActions";

import "./incidents.sass";

class Incidents extends Component {
  async componentDidMount() {
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
    this.props.getFilteredIncidents(this.props.baseData.baseIncidents);
    if (this.props.incidents.filteredIncidents.length === 0) {
      this.props.getFilteredIncidents(this.props.baseData.baseIncidents);
    }
  }
  render() {
    const { auth } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    const { match } = this.props;
    const { showSearch } = this.props.nav;
    console.log(this.props);
    return (
      <React.Fragment>
        <Header match={match} />
        <section
          id="incidents"
          className={showSearch ? "incidents incidents-search-on" : "incidents"}
        >
          <div className="incident-data">
            <section className="incidents-top-info">
              {this.props.incidents.incidentsCount === 0 ? (
                <p>there are no incident results from your search</p>
              ) : (
                <p>viewing {this.props.incidents.incidentsCount} results</p>
              )}
            </section>
            {this.props.incidents.incidentsLoaded ? (
              this.props.incidents.filteredIncidents.map(incident => {
                return (
                  <Incident
                    key={incident.id}
                    {...incident}
                    loggedIn={authenticated}
                  />
                );
              })
            ) : (
              <h3>Incidents are Loading....</h3>
            )}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  baseData: state.baseData,
  incidents: state.incidents,
  auth: state.firebase.auth
});

export default compose(
  withFirestore,
  connect(
    mapStateToProps,
    { getBaseIncidents, getFilteredIncidents, getUpdatedFilteredIncidents }
  )
)(Incidents);
