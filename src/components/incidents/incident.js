import React from "react";
import { Link } from "react-router-dom";

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
            <p>
              <Link to="/">
                <img
                  src={`${process.env.PUBLIC_URL}/edit.png`}
                  alt="Edit Graphic"
                />
              </Link>
            </p>
          ) : null}
        </div>
      </div>
      <div className="incident-right">
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
        {/* {this.props.additionalInfo ? this._renderAdditionalLink() : null}
        {this._renderImage()} */}
      </div>
    </div>
  );
};

const renderAdditionalLink = props => {
  var testIfLink = props.additionalInfo.substring(0, 4);
  if (testIfLink === "http") {
    return (
      <a href={props.additionalInfo}>
        <p className="incident-additional-information">
          <span className="incident-span">Aditional Information</span>
          {props.additionalInfo}
        </p>
      </a>
    );
  } else {
    return (
      <p className="incident-additional-information">
        <span className="incident-span">Aditional Information</span>
        {props.additionalInfo}
      </p>
    );
  }
};

const renderImage = props => {
  if (props.image) {
    return (
      <a className="incident-image">
        <img
          src={`${process.env.PUBLIC_URL}/${props.image}`}
          alt="the incident"
        />
      </a>
    );
  } else {
    return null;
  }
};

export default Incident;
