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
        parseInt(props.id, 10) & 1
          ? "incident incident-odd"
          : "incident incident-even"
      }
    >
      <p className="incident-date">
        <span className="incident-span">Date of Incident</span>
        {props.date}
      </p>
      <p className="incident-serial">
        <span className="incident-span">Serial Number</span>
        {props.serial}
      </p>
      <p className="incident-registration">
        <span className="incident-span">Registration</span>
        {props.registration}
      </p>
      <p className="incident-operator">
        <span className="incident-span">Operator</span>
        {props.operator}
      </p>
      <p className="incident-city">
        <span className="incident-span">Location</span>
        {props.locationCity}
      </p>
      <p className="incident-airport">
        <span className="incident-span">Airport</span>
        {props.locationAirport}
      </p>
      <p className="incident-category">
        <span className="incident-span">Category</span>
        {props.accidentCategory}
      </p>
      <p className="incident-fatalities">
        <span className="incident-span">Fatalities</span>
        {props.fatalities}
      </p>
      <p className="incident-photo">
        <span className="incident-span">photo</span>
        no
      </p>
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
