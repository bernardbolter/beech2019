import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { openModal } from "../../features/modals/modalStore/modalActions";

import "./incident.sass";

const Incident = props => {
  return (
    <Link
      to={{ pathname: `/incidents/${props.id}`, incident: props }}
      className={
        parseInt(props.evenOdd, 10) & 1
          ? "incident incident-odd"
          : "incident incident-even"
      }
    >
      <div className="incident-field incident-date">
        <p>
          <span className="incident-span">Date of Incident</span>
          {props.date}
        </p>
      </div>
      <div className="incident-field incident-serial">
        <p>
          <span className="incident-span">Serial Number</span>
          {props.serial}
        </p>
      </div>
      <div className="incident-field incident-registration">
        <p>
          <span className="incident-span">Registration</span>
          {props.registration}
        </p>
      </div>
      <div className="incident-field incident-operator">
        <p>
          <span className="incident-span">Operator</span>
          {props.operator}
        </p>
      </div>
      <div className="incident-field incident-airport">
        <p>
          <span className="incident-span">Airport</span>
          {props.locationAirport}
        </p>
      </div>
      <div className="incident-field incident-city">
        <p>
          <span className="incident-span">Location</span>
          {props.locationCity}
        </p>
      </div>
      <div className="incident-field incident-fatalities">
        <p>
          <span className="incident-span">Fatalities</span>
          {props.fatalities}
        </p>
      </div>
      <div className="incident-field incident-photo">
        {props.hasPhoto === true && props.hasPhoto !== undefined ? (
          <img src={`${process.env.PUBLIC_URL}/camera.png`} alt="camera icon" />
        ) : null}
      </div>
    </Link>
  );
};

const actions = {
  openModal
};

export default connect(
  null,
  actions
)(Incident);
