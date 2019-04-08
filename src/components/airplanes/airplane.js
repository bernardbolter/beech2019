import React from "react";
import { Link } from "react-router-dom";

const Airplane = props => {
  return (
    <div
      className={
        parseInt(props.evenOdd, 10) & 1
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
        <div className="airplane-date-made">
          <p>
            <span className="mobile-excerpt">Prod. Date</span>
            {props.prodDate}
          </p>
        </div>
        <div className="airplane-current-status">
          <p>
            <span className="mobile-excerpt">Status</span>
            {props.status}
          </p>
        </div>
        <div className="airplane-registration">
          <p>
            <span className="mobile-excerpt">Latest Reg.</span>
            {props.currentReg}
          </p>
        </div>
        <div className="airplane-latest-operator">
          <p>
            <span className="mobile-excerpt">Latest Operator</span>
            {props.currentOperator}
          </p>
        </div>
        <div className="airplane-country">
          <p>
            <span className="mobile-excerpt">Latest Country</span>
            {props.currentCountry}
          </p>
          {imageExists(`${process.env.PUBLIC_URL}/flags/${props.flag}.png`) ? (
            <img
              src={
                props.flag === "?" || props.flag === undefined
                  ? null
                  : [`${process.env.PUBLIC_URL}/flags/${props.flag}.png`]
              }
              alt={
                props.flag === "?" || props.flag === undefined
                  ? null
                  : [`${props.latestCountry} Flag`]
              }
            />
          ) : null}
        </div>
      </Link>
    </div>
  );
};

const imageExists = url => {
  let image = new Image();
  image.src = url;
  if (!image.complete) {
    return false;
  } else if (image.height === 0) {
    return false;
  }

  return true;
};

export default Airplane;
