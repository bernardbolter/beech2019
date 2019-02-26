import React from "react";

const Event = props => {
  console.log(props);
  return (
    <section className={props.class}>
      <p>Date</p>
      {props.date === "" ? <h3>No Date</h3> : <h3>{props.date}</h3>}

      <p>Owner</p>
      <h3>{props.owner}</h3>
      <p>Operator</p>
      <h3>{props.operator}</h3>
      <p>Comment</p>
      <h3>{props.comment}</h3>
    </section>
  );
};

export default Event;
