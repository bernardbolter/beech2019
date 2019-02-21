import React from "react";
import { Link } from "react-router-dom";

const Airplane = props => {
  return (
    <div
      className={
        parseInt(props.id, 10) & 1
          ? "airplane-excerpt excert-odd"
          : "airplane-excerpt excert-even"
      }
    >
      <Link to={`/airplanes/${props.serial}`}>
        <div className="airplane-serial">
          <span className="mobile-excerpt">Serial</span>
          {props.serial}
        </div>
        <div className="airplane-current-status">
          <p>
            <span className="mobile-excerpt">Current Status</span>
            {props.currentStatus}
          </p>
        </div>
        <div className="airplane-date-made">
          <p>
            <span className="mobile-excerpt">Date Made</span>
            {props.factoryDate}
          </p>
        </div>
        <div className="airplane-registration">
          <p>
            <span className="mobile-excerpt">Registration</span>
            {props.factoryReg}
          </p>
        </div>
        <div className="airplane-latest-operator">
          <p>
            <span className="mobile-excerpt">Latest Operator</span>
            {props.latestOperator}
          </p>
        </div>
        <div className="airplane-country">
          <p>
            <span className="mobile-excerpt">Country</span>
            {props.latestCountry}
          </p>
          <img
            src={displayFlag(props.latestCountry)}
            alt={props.latestCountry}
          />
        </div>
      </Link>
    </div>
  );
};

const displayFlag = country => {
  console.log(country);
  const countryUnder = country.split(" ").join("_");
  const countryAll = `${process.env.PUBLIC_URL}/flags/${countryUnder}.png`;
  if (countryUnder === "?") {
    return null;
  } else {
    return countryAll;
  }
};

export default Airplane;
