import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";
import { Link } from "react-router-dom";

import Header from "../header/header";
import Event from "./event";

import { openModal } from "../../features/modals/modalStore/modalActions";

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
    await this.props.firestore
      .collection("airplanes")
      .where("serial", "==", serial)
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.setState({
            airplaneData: { ...doc.data(), uid: doc.id }
          });
        });
      });
    await this.setState({ airplaneLoaded: true });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.airplaneData !== prevState.airplaneData) {
      this.getEvents(this.state.airplaneData);
    }
  }

  render() {
    const { match, auth, openModal } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    const {
      serial,
      prodDate,
      status,
      currentReg,
      currentRegDate,
      currentRegStatus,
      currentOwner,
      currentConfiguration,
      currentOperator,
      currentCountry,
      currentDataSourceLink,
      currentDataSourceDate,
      currentDataSourceType,
      initialOperator,
      initialOperatorReg,
      prodReg,
      notes
    } = this.state.airplaneData;
    return (
      <React.Fragment>
        <section>
          <Header match={match} />
          {!this.state.airplaneLoaded ? (
            <div className="airplane-no-data">
              <h1>Loading Airplane Details....</h1>
              <img
                src={`${process.env.PUBLIC_URL}/three-dots.gif`}
                alt="animates dots"
              />
            </div>
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
                    <p>{serial}</p>
                  </div>
                  <div className="airplane-single-date-made">
                    <h3>Production Date</h3>
                    <p>{prodDate}</p>
                  </div>
                  <div className="airplane-single-current-status">
                    <h3>Current Status</h3>
                    <p>{status}</p>
                  </div>
                  <div className="airplane-single-registration">
                    <h3>Current Registration</h3>
                    <p>{currentReg}</p>
                  </div>
                  <div className="airplane-single-latest-operator">
                    <h3>Current Operator</h3>
                    <p>{currentOperator}</p>
                  </div>
                  <div className="airplane-single-country">
                    <h3>Current Country</h3>
                    <p>{currentCountry}</p>
                  </div>
                </div>
              </div>
              <section className="airplane-single-bottom-container">
                <div className="airplane-single-bottom-left">
                  <div className="bot-info-left">
                    {currentDataSourceLink !== "" ? (
                      <div className="single-info-left">
                        <p className="bot-info-title">
                          Current Data Source Link
                        </p>
                        <p className="bot-info-data">
                          <a
                            href={`http://${currentDataSourceLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {currentDataSourceLink}
                          </a>
                        </p>
                      </div>
                    ) : null}

                    {currentDataSourceDate !== "" ? (
                      <div className="single-info-left">
                        <p className="bot-info-title">
                          Current Data Source Date
                        </p>
                        <p className="bot-info-data bot-info-line">
                          {currentDataSourceDate}
                        </p>
                      </div>
                    ) : null}

                    {currentDataSourceType !== "" ? (
                      <div className="single-info-left">
                        <p className="bot-info-title">
                          Current Data Source Type
                        </p>
                        <p className="bot-info-data bot-info-line">
                          {currentDataSourceType}
                        </p>
                      </div>
                    ) : null}

                    {currentOwner !== "" ? (
                      <div className="single-info-left">
                        <p className="bot-info-title">Current Owner</p>
                        <p className="bot-info-data bot-info-line">
                          {currentOwner}
                        </p>
                      </div>
                    ) : null}

                    {currentConfiguration !== "" ? (
                      <div className="single-info-left">
                        <p className="bot-info-title">Current Configuration</p>
                        <p className="bot-info-data bot-info-line">
                          {currentConfiguration}
                        </p>
                      </div>
                    ) : null}

                    {currentRegDate !== "" ? (
                      <div className="single-info-left">
                        <p className="bot-info-title">
                          Current Registration Date
                        </p>
                        <p className="bot-info-data bot-info-line">
                          {currentRegDate}
                        </p>
                      </div>
                    ) : null}

                    {currentRegStatus !== "" &&
                    currentRegStatus !== undefined ? (
                      <div className="single-info-left">
                        <p className="bot-info-title">
                          Current Registration Date
                        </p>
                        <p className="bot-info-data bot-info-line">
                          {currentRegStatus}
                        </p>
                      </div>
                    ) : null}
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
                  {prodReg !== "" && prodReg !== undefined ? (
                    <div className="single-info-right">
                      <p className="bot-info-title">Production Registration</p>
                      <p className="bot-info-data bot-info-line">{prodReg}</p>
                    </div>
                  ) : null}
                  {initialOperator !== "" && initialOperator !== undefined ? (
                    <div className="single-info-right">
                      <p className="bot-info-title">Initial Operator</p>
                      <p className="bot-info-data bot-info-line">
                        {initialOperator}
                      </p>
                    </div>
                  ) : null}
                  {initialOperatorReg !== "" &&
                  initialOperatorReg !== undefined ? (
                    <div className="single-info-right">
                      <p className="bot-info-title">
                        Initial Operator Registration
                      </p>
                      <p className="bot-info-data bot-info-line">
                        {initialOperatorReg}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="airplane-single-events">
                  <div className="airplane-single-bottom-right-events">
                    {prodReg !== "" && prodReg !== undefined ? (
                      <div className="single-info-right">
                        <p className="bot-info-title">
                          Production Registration
                        </p>
                        <p className="bot-info-data bot-info-line">{prodReg}</p>
                      </div>
                    ) : null}
                    {initialOperator !== "" && initialOperator !== undefined ? (
                      <div className="single-info-right">
                        <p className="bot-info-title">Initial Operator</p>
                        <p className="bot-info-data bot-info-line">
                          {initialOperator}
                        </p>
                      </div>
                    ) : null}
                    {initialOperatorReg !== "" &&
                    initialOperatorReg !== undefined ? (
                      <div className="single-info-right">
                        <p className="bot-info-title">
                          Initial Operator Registration
                        </p>
                        <p className="bot-info-data bot-info-line">
                          {initialOperatorReg}
                        </p>
                      </div>
                    ) : null}
                  </div>
                  {this.state.eventsLoaded ? (
                    <div>
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
                  ) : (
                    <div className="event-loading">
                      <p>Loading Airplane Event Details...</p>
                    </div>
                  )}

                  {notes !== "" && notes !== undefined ? (
                    <div className="single-notes">
                      <p className="single-notes-title">notes</p>
                      <p className="single-notes-text">{notes}</p>
                    </div>
                  ) : null}
                </div>
              </section>
            </div>
          )}
        </section>
      </React.Fragment>
    );
  }

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
    this.setState({
      events: eventsArray,
      eventsLoaded: true
    });
  };
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

const actions = {
  openModal
};

export default compose(
  withFirestore,
  connect(
    mapStateToProps,
    actions
  )
)(AirplaneSingle);
