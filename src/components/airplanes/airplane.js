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
            {props.latestReg}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Airplane;
