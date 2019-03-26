import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";
import { Link } from "react-router-dom";

import { openModal } from "../../features/modals/modalStore/modalActions";

import Header from "../header/header";
import { all } from "q";

class IncidentSingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      incidentLoaded: false,
      incidentData: {}
    };
  }

  async componentDidMount() {
    if (this.props.history.location.incident !== undefined) {
      this.setState({
        incidentData: this.props.history.location.incident,
        incidentLoaded: true
      });
    } else {
      await this.props.firestore
        .collection("base")
        .doc("incidents")
        .onSnapshot(snapshot => {
          const allIncidents = snapshot.data();
          let incidentKey = `incident${this.props.match.params.id}`;
          this.setState({
            incidentData: allIncidents[incidentKey],
            incidentLoaded: true
          });
        });
    }
  }

  render() {
    console.log(this.props);
    const { incidentLoaded, incidentData } = this.state;
    console.log(incidentData);
    const { match } = this.props;
    return (
      <React.Fragment>
        <Header match={match} />
        {incidentLoaded ? (
          <section className="incident-single-wrap">
            <h1>Single Incident</h1>
          </section>
        ) : (
          <section className="no-incident">
            <h1>Incident Loading</h1>
          </section>
        )}
      </React.Fragment>
    );
  }
}

// {serial === "" || serial === "?" ? (
//   <p className="incident-serial">
//     <span className="incident-span">Serial Number</span>
//     {serial}
//   </p>
// ) : (
//   <Link to={`/airplanes/${serial}`} className="incidents-link">
//     <p className="incident-serial">
//       <img
//         src={`${process.env.PUBLIC_URL}/link.png`}
//         alt="Link Graphic"
//       />
//       <span className="incident-span">Serial Number</span>
//       {serial}
//     </p>
//   </Link>
// )}

const mapState = state => ({
  incidents: state.incidents
});

const actions = {
  openModal
};

export default compose(
  withFirestore,
  connect(
    mapState,
    actions
  )
)(IncidentSingle);
