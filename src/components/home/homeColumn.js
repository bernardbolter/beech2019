import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const HomeColumn = props => {
  return (
    <div className={"grid-" + props.columnName}>
      <div className={"grid-cell-header grid-cell-header-" + props.columnName}>
        <p>{props.columnHeader}</p>
      </div>
      {props.home.homeData[props.columnName].map((data, i) => {
        if (data.name === null) {
          return (
            <div
              className={
                i % 2
                  ? `grid-cell grid-cell-even grid-cell-${props.columnName}`
                  : `grid-cell grid-cell-odd grid-cell-${props.columnName}`
              }
              key={i}
            />
          );
        } else {
          return (
            <Link
              to={
                props.columnName === "accidentType"
                  ? "/incidents"
                  : "/airplanes"
              }
              onClick={() => {
                this._decideLinks(data, props.columnName);
              }}
              key={i}
              className={
                i % 2
                  ? `grid-cell grid-cell-even grid-cell-${props.columnName}`
                  : `grid-cell grid-cell-odd grid-cell-${props.columnName}`
              }
            >
              <p className="grid-name">{data.name}</p>
              <p className="grid-count">{data.count}</p>
            </Link>
          );
        }
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  home: state.home
});

export default connect(mapStateToProps)(HomeColumn);
