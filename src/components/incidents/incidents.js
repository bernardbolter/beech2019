import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";

import Header from "../header/header";
import Incident from "./incident";

import { filterIncidents } from "./incidentsStore/incidentsActions";

import "./incidents.sass";

class Incidents extends Component {
  async componentDidMount() {
    let firedentsRef = await this.props.firestore
      .collection("base")
      .doc("incidents");
    await firedentsRef.onSnapshot(snapshot => {
      let snap = snapshot.data();
      let incidentsArray = Object.keys(snap).map(key => snap[key]);
      this.props.filterIncidents(incidentsArray, this.props.searchIncidents);
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
              <h1>Incidents</h1>
            </section>
            {/* {this.props.incidents.incidentsLoaded ? (
              this.props.incidents.filteredIncidents.map(incident => {
                if (!incident.serial) {
                  return null;
                } else {
                  return (
                    <Incident
                      key={incident.id}
                      {...incident}
                      loggedIn={authenticated}
                    />
                  );
                }
              })
            ) : (
              <h3>Incidents are Loading....</h3>
            )} */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapState = state => ({
  nav: state.nav,
  incidents: state.incidents
});

const actions = {
  filterIncidents
};

export default compose(
  withFirestore,
  connect(
    mapState,
    actions
  )
)(Incidents);
