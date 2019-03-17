import React from "react";
import { Link } from "react-router-dom";

const Airplane = props => {
  console.log(props);
  return (
    <div
      className={
        parseInt(props.id, 10) & 1
          ? "airplane-excerpt excerpt-odd"
          : "airplane-excerpt excerpt-even"
      }
    >
      <Link to={`/airplanes/${props.serial}`}>
        <div className="airplane-serial">
          <p>
            <span className="mobile-excerpt">Serial</span>
            {props.serial}
          </p>
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
            {props.latestReg}
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
            src={
              props.countryName === "?" || props.countryName === undefined
                ? null
                : [`${process.env.PUBLIC_URL}/flags/${props.countryName}.png`]
            }
            alt={
              props.countryName === "?" || props.countryName === undefined
                ? null
                : [`${props.latestCountry} Flag`]
            }
          />
        </div>
      </Link>
    </div>
  );
};

export default Airplane;
