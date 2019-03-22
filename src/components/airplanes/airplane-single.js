import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";
import { Link } from "react-router-dom";

import Header from "../header/header";
import Event from "./event";

import { openModal } from "../../features/modals/modalStore/modalActions";

import { getBaseIncidents } from "../../base/baseActions";

import "./airplane-single.sass";

class AirplaneSingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      airplaneLoaded: false,
      eventsLoaded: false,
      incidentsLoaded: false,
      airplaneData: {},
      airplaneDocID: "",
      events: []
    };
  }

  async componentDidMount() {
    const serial = this.props.match.params.serial;
    const airplaneRef = this.props.firestore.collection("airplanes");
    await airplaneRef
      .where("serial", "==", serial)
      .get()
      .then(docs => {
        docs.forEach(doc => {
          this.setState({
            airplaneData: { ...doc.data(), uid: doc.id }
          });
        });
      })
      .catch(error => {
        console.log("Error getting document:", error);
      });
    await this.setState({ airplaneLoaded: true });
    await this.getEvents(this.state.airplaneData);
    await this.setState({ eventsLoaded: true });
    if (this.state.airplaneData.incidentHistory) {
      if (this.props.baseData.baseIncidents.length === 0) {
        console.log("geting base incidents");
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
      console.log(this.state.airplaneData.incidentHistory);
    } else {
      console.log("no incident history");
    }
  }

  render() {
    const { match, auth, openModal } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    console.log(this.state.airplaneData);
    return (
      <React.Fragment>
        <section>
          <Header match={match} />
          {!this.state.airplaneLoaded ? (
            <h1>Loading Airplane Data</h1>
          ) : (
            <div className="airplane-container">
              <div className="airplane-single">
                <Link to={`/airplanes`}>
                  <div className="airplane-single-top">
                    <svg width="10" height="20" viewBox="0 0 10 20">
                      <line
                        x1="0"
                        x2="10"
                        y1="10"
                        y2="0"
                        strokeWidth="1"
                        stroke="#999999"
                      />
                      <line
                        x1="0"
                        x2="10"
                        y1="10"
                        y2="20"
                        strokeWidth="1"
                        stroke="#999999"
                      />
                    </svg>
                    <p>Back</p>
                  </div>
                </Link>

                <div className="airplane-single-colors">
                  <div className="airplane-single-serial">
                    <h3>Serial</h3>
                    <p>{this.state.airplaneData.serial}</p>
                  </div>
                  <div className="airplane-single-current-status">
                    <h3>Current Status</h3>
                    <p>{this.state.airplaneData.currentStatus}</p>
                  </div>
                  <div className="airplane-single-date-made">
                    <h3>Date Made</h3>
                    <p>{this.state.airplaneData.factoryDate}</p>
                  </div>
                  <div className="airplane-single-registration">
                    <h3>Registration</h3>
                    <p>{this.state.airplaneData.latestReg}</p>
                  </div>
                  <div className="airplane-single-latest-operator">
                    <h3>Latest Operator</h3>
                    <p>{this.state.airplaneData.latestOperator}</p>
                  </div>
                  <div className="airplane-single-country">
                    <h3>Country</h3>
                    <p>{this.state.airplaneData.latestCountry}</p>
                  </div>
                </div>
              </div>
              <section className="airplane-single-bottom-container">
                <div className="airplane-single-bottom-left">
                  <div className="bot-info-left">
                    <p className="bot-info-title">Current Status Date</p>
                    <p className="bot-info-data">
                      {this.state.airplaneData.currentstatusDate}
                    </p>
                    <p className="bot-info-title">Current Data Source</p>
                    <p className="bot-info-data bot-info-line">
                      {this.state.airplaneData.dataSource}
                    </p>
                  </div>
                  <div className="bot-info-right">
                    <p className="bot-info-title">Initial Operator</p>
                    <p className="bot-info-data">
                      {this.state.airplaneData.initialOperator !== "" ? (
                        this.state.airplaneData.initialOperator
                      ) : (
                        <span>no initial operator data</span>
                      )}
                    </p>
                    <p className="bot-info-title">Initial Registration</p>
                    <p className="bot-info-data">
                      {this.state.airplaneData.initialopReg !== "" ? (
                        this.state.airplaneData.initialopReg
                      ) : (
                        <span>no initial registration data</span>
                      )}
                    </p>
                    {authenticated ? (
                      <p
                        className="bot-edit-button"
                        onClick={() =>
                          openModal(
                            "EditAirplaneModal",
                            this.state.airplaneData,
                            this.state.airplaneDocID
                          )
                        }
                      >
                        edit airplane
                        <img
                          src={`${process.env.PUBLIC_URL}/edit.png`}
                          alt="Edit Graphic"
                        />
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="airplane-single-bottom-right">
                  <h1>Events</h1>
                  {!this.state.eventsLoaded ||
                  this.state.airplaneData.event1Owner === "" ? (
                    <div className="event-container odd">
                      No Events for this Airplane
                    </div>
                  ) : (
                    this.state.events.map(event => {
                      return <Event key={event.key} {...event} />;
                    })
                  )}
                </div>
              </section>
            </div>
          )}
        </section>
      </React.Fragment>
    );
  }

  displayCountries = () => {
    if (this.state.airplaneData.latestCountry.charAt(0) === `(`) {
      var noCountry = this.state.airplaneData.latestCountry.slice(1, -1);
      return noCountry;
    } else {
      return this.state.airplaneData.latestCountry;
    }
  };

  displayOperator = () => {
    if (this.state.airplaneData.latestOperator.charAt(0) === `(`) {
      var noOperate = this.state.airplaneData.latestOperator.slice(1, -1);
      return noOperate;
    } else {
      return this.state.airplaneData.latestOperator;
    }
  };

  getEvents = events => {
    let eventsArray = [];
    for (var i = 1; i < 15; i++) {
      let evenOdd = "";
      if (i % 2 === 0) {
        evenOdd = "event-container even";
      } else {
        evenOdd = "event-container odd";
      }
      let dateRaw = `event${i}Date`;
      let date = events[dateRaw];
      let opRaw = `event${i}Operator`;
      let op = events[opRaw];
      let ownRaw = `event${i}Owner`;
      let own = events[ownRaw];
      let comRaw = `event${i}Comment`;
      let com = events[comRaw];

      if (own !== "") {
        eventsArray.push({
          key: i,
          class: evenOdd,
          date: date,
          operator: op,
          owner: own,
          comment: com
        });
      }
    }
    this.setState({ events: eventsArray });
  };
}

const mapStateToProps = state => ({
  baseData: state.baseData,
  auth: state.firebase.auth
});

const actions = {
  getBaseIncidents,
  openModal
};

export default compose(
  withFirestore,
  connect(
    mapStateToProps,
    actions
  )
)(AirplaneSingle);
