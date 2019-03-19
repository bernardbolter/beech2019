import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { openModal } from "../../features/modals/modalStore/modalActions";

import "./incident.sass";

const Incident = props => {
  return (
    <div
      className={
        parseInt(props.id, 10) & 1
          ? "incident-excerpt incident-odd"
          : "incident-excerpt incident-even"
      }
    >
      <div className="incident-left">
        <div className="incident-left-one">
          <p className="incident-date">
            <span className="incident-span">Date of Incident</span>
            {props.date}
          </p>
          {props.serial === "" || props.serial === "?" ? (
            <p className="incident-serial">
              <span className="incident-span">Serial Number</span>
              {props.serial}
            </p>
          ) : (
            <Link to={`/airplanes/${props.serial}`} className="incidents-link">
              <p className="incident-serial">
                <img
                  src={`${process.env.PUBLIC_URL}/link.png`}
                  alt="Link Graphic"
                />
                <span className="incident-span">Serial Number</span>
                {props.serial}
              </p>
            </Link>
          )}

          <p className="incident-registration">
            <span className="incident-span">Registration</span>
            {props.registration}
          </p>
          <p className="incident-operator">
            <span className="incident-span">Operator</span>
            {props.operator}
          </p>
        </div>
        <div className="incident-left-two">
          <p className="incident-location">
            <span className="incident-span">Location</span>
            {props.locationCity}
          </p>
          <p className="incident-airport">
            <span className="incident-span">Airport</span>
            {props.locationAirport}
          </p>
          <p className="incident-fatalities">
            <span className="incident-span">Fatalities</span>
            {props.fatalities}
          </p>
          {props.loggedIn ? (
            <div
              className="edit-incidents-wrap"
              onClick={() =>
                props.openModal("EditIncidentModal", props, "edit")
              }
            >
              <p>edit incident</p>
              <img
                src={`${process.env.PUBLIC_URL}/edit.png`}
                alt="Edit Graphic"
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="incident-right">
        <div className="incident-right-left">
          <p className="incident-type">
            <span className="incident-span">Type of Incident</span>
            {props.accidentType}
          </p>
          <p className="incident-editorial-synopsis">
            <span className="incident-span">Synopsis</span>
            {props.editorial}
          </p>
          {props.ntsbreportNumber ? (
            <p className="incident-ntsb-number">
              <span className="incident-span">NTSB Report Number</span>
              {props.ntsbreportNumber}
            </p>
          ) : null}
          {props.otherReport ? (
            <p className="incident-other-report">
              <span className="incident-span">Other Report</span>
              {props.otherReport}
            </p>
          ) : null}

          {renderAdditionalLink(props.additionalInfo)}
        </div>
        <div className="incident-right-right">
          {props.image ? (
            <div className="incident-photo-wrap">
              <img src={props.image} alt={`ariplane ${props.serial}`} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const renderAdditionalLink = info => {
  if (info === "" || info === undefined) {
    return null;
  } else {
    var testIfLink = info.substring(0, 4);
    if (testIfLink === "http") {
      return (
        <a
          href={info}
          target="_blank"
          rel="noopener noreferrer"
          className="incident-additional-information"
        >
          <p>
            <span className="incident-span">Additional Information</span>
            {info}
          </p>
        </a>
      );
    } else {
      return (
        <p className="incident-additional-information">
          <span className="incident-span">Addtional Information</span>
          {info}
        </p>
      );
    }
  }
};

const actions = {
  openModal
};

export default connect(
  null,
  actions
)(Incident);
