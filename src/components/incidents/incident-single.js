import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";
import { Link } from "react-router-dom";

import { openModal } from "../../features/modals/modalStore/modalActions";

import Header from "../header/header";

import "./incident-single.sass";

class IncidentSingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      incidentLoaded: false,
      incidentData: {}
    };
  }

  async componentDidMount() {
    if (this.props.history.location.incident !== undefined) {
      this.setState({
        incidentData: this.props.history.location.incident,
        incidentLoaded: true
      });
    } else {
      await this.props.firestore
        .collection("base")
        .doc("incidents")
        .onSnapshot(snapshot => {
          const allIncidents = snapshot.data();
          let incidentKey = `incident${this.props.match.params.id}`;
          this.setState({
            incidentData: allIncidents[incidentKey],
            incidentLoaded: true
          });
        });
    }
  }

  render() {
    const { incidentLoaded, incidentData } = this.state;
    const { match, openModal } = this.props;
    console.log(incidentData);
    return (
      <React.Fragment>
        <Header match={match} />
        {incidentLoaded ? (
          <section className="incident-single">
            <Link to={`/incidents`}>
              <div className="incident-single-top">
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

            <div className="incident-single-colors">
              <div className="incident-single-date">
                <h3>Date</h3>
                <p>{incidentData.date}</p>
              </div>
              <Link to={`/airplanes/${incidentData.serial}`}>
                <div className="incident-single-serial">
                  <h3>Serial Nmber</h3>
                  <p>
                    {incidentData.serial}
                    <img
                      src={`${process.env.PUBLIC_URL}/link.png`}
                      alt="Link Graphic"
                    />
                  </p>
                </div>
              </Link>
              <div className="incident-single-registration">
                <h3>Registation</h3>
                <p>{incidentData.registration}</p>
              </div>
              <div className="incident-single-operator">
                <h3>Operator</h3>
                <p>{incidentData.operator}</p>
              </div>
              <div className="incident-single-airport">
                <h3>Airport</h3>
                <p>{incidentData.locationAirport}</p>
              </div>
              <div className="incident-single-city">
                <h3>Location City</h3>
                <p>{incidentData.locationCity}</p>
              </div>
              <div className="incident-single-accident">
                <h3>Accident Category</h3>
                <p>{incidentData.accidentCategory}</p>
              </div>
              <div className="incident-single-fatalities">
                <h3>Fatalities</h3>
                <p>{incidentData.fatalities}</p>
              </div>
            </div>
            <div className="incident-bot-wrap">
              <div className="incident-bot-left">
                {incidentData.phaseFlight !== "" ? (
                  <div className="incidetn-bot-left-data">
                    <h5>Phase of Flight</h5>
                    <h4>{incidentData.phaseFlight}</h4>
                  </div>
                ) : null}
                {incidentData.component !== "" ? (
                  <div className="incidetn-bot-left-data">
                    <h5>Component</h5>
                    <h4>{incidentData.component}</h4>
                  </div>
                ) : null}
                {incidentData.crewResponse !== "" ? (
                  <div className="incidetn-bot-left-data">
                    <h5>Crew Response</h5>
                    <h4>{incidentData.crewResponse}</h4>
                  </div>
                ) : null}
                {incidentData.componentFindings !== "" ? (
                  <div className="incidetn-bot-left-data">
                    <h5>Component Findings</h5>
                    <h4>{incidentData.componentFindings}</h4>
                  </div>
                ) : null}
                {incidentData.crewError !== "" ? (
                  <div className="incidetn-bot-left-data">
                    <h5>Crew Error</h5>
                    <h4>{incidentData.crewError}</h4>
                  </div>
                ) : null}
                {incidentData.endResults !== "" ? (
                  <div className="incidetn-bot-left-data">
                    <h5>End Results</h5>
                    <h4>{incidentData.endResults}</h4>
                  </div>
                ) : null}
                {incidentData.editorialOrSupplemental !== "" ? (
                  <div className="incidetn-bot-left-data">
                    <h5>Editorial | Supplemental</h5>
                    <h4>{incidentData.editorialOrSupplemental}</h4>
                  </div>
                ) : null}
              </div>
              <div className="incident-bot-right">
                {incidentData.image_1 !== undefined ? (
                  <div
                    className="incident-image-wrap"
                    onClick={() =>
                      openModal("IncidentPhotoModal", {
                        url: incidentData.image_1,
                        name: incidentData.operator
                      })
                    }
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/incident_photos/${
                        incidentData.image_1
                      }`}
                      alt={`${incidentData.operator} airplane`}
                    />
                  </div>
                ) : null}
                {incidentData.image_2 !== undefined ? (
                  <div
                    className="incident-image-wrap"
                    onClick={() =>
                      openModal("IncidentPhotoModal", {
                        url: incidentData.image_2,
                        name: incidentData.operator
                      })
                    }
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/incident_photos/${
                        incidentData.image_2
                      }`}
                      alt={`${incidentData.operator} airplane`}
                    />
                  </div>
                ) : null}
                {incidentData.image_3 !== undefined ? (
                  <div
                    className="incident-image-wrap"
                    onClick={() =>
                      openModal("IncidentPhotoModal", {
                        url: incidentData.image_3,
                        name: incidentData.operator
                      })
                    }
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/incident_photos/${
                        incidentData.image_3
                      }`}
                      alt={`${incidentData.operator} airplane`}
                    />
                  </div>
                ) : null}
                {incidentData.image_4 !== undefined ? (
                  <div
                    className="incident-image-wrap"
                    onClick={() =>
                      openModal("IncidentPhotoModal", {
                        url: incidentData.image_4,
                        name: incidentData.operator
                      })
                    }
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/incident_photos/${
                        incidentData.image_4
                      }`}
                      alt={`${incidentData.operator} airplane`}
                    />
                  </div>
                ) : null}
                {incidentData.primaryReference !== "" ? (
                  <div className="incidetn-bot-right-data">
                    <h5>Primary Reference</h5>
                    <h4>{incidentData.primaryReference}</h4>
                  </div>
                ) : null}
                {incidentData.primaryReferenceInfo !== "" ? (
                  <div className="incidetn-bot-right-data">
                    <h5>Primary Reference Info</h5>
                    <h4>{incidentData.primaryReferenceInfo}</h4>
                  </div>
                ) : null}
                {incidentData.secondaryReference !== "" ? (
                  <div className="incidetn-bot-right-data">
                    <h5>Secondary Reference</h5>
                    <h4>{incidentData.secondaryReference}</h4>
                  </div>
                ) : null}
                {incidentData.secondaryReferenceInfo !== "" ? (
                  <div className="incidetn-bot-right-data">
                    <h5>Secondary Reference Info</h5>
                    <h4>{incidentData.secondaryReferenceInfo}</h4>
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        ) : (
          <div className="airplanes-no-data">
            <h1>Loading Incident Data </h1>
            <img
              src={`${process.env.PUBLIC_URL}/three-dots.gif`}
              alt="animates dots"
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapState = state => ({
  incidents: state.incidents
});

const actions = {
  openModal
};

export default compose(
  withFirestore,
  connect(
    mapState,
    actions
  )
)(IncidentSingle);
