import React from "react";

import "./factExcerpts";

const FactExcerpt = props => (
  <div className="fact_excerpt">
    <h3>{props.name}</h3>
    <h4>
      <p>First Delivery</p>
      {props.firstDelivery}
    </h4>
    <h4>
      <p>Last Operation</p>
      {props.lastOperation}
    </h4>
    <h4>
      <p>Total Deliveries</p>
      {props.totalDeliveries}
    </h4>
    <h4>
      <p>Size and Date at Largest</p>
      {props.size}
    </h4>
    <h4>
      <p>Dates according to Wikipedia</p>
      {props.wikiDates}
    </h4>
    <h4>
      <p>Size according to Wikipedia</p>
      {props.wikiSize}
    </h4>
  </div>
);

export default FactExcerpt;
