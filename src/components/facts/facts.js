import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";

import Header from "../header/header";

import "./facts.sass";

class Facts extends Component {
  // async componentDidMount() {
  //   if (this.props.baseData.basefacts.length === 0) {
  //     let factsRef = await this.props.firestore.collection("base").doc("facts");
  //     await factsRef
  //       .get()
  //       .then(doc => {
  //         if (!doc.exists) {
  //           console.log("No such document.");
  //         } else {
  //           this.props.getBaseFacts(doc.data());
  //         }
  //       })
  //       .catch(err => {
  //         console.log("Error getting document".err);
  //       });
  //   }
  // }

  render() {
    const { match } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <Header match={match} />
        <div className="facts">
          <h1>Facts about the Beech 1900</h1>
          {/* <div className="facts_info">
            <p>
              The Beechcraft 1900 is a 19-passenger, pressurized twin-engine
              turboprop fixed-wing aircraft that was manufactured by Beechcraft.
              It was designed, and is primarily used, as a regional airliner. It
              is also used as a freight aircraft and corporate transport, and by
              several governmental and military organisations. With customers
              favoring larger regional jets, Raytheon ended production in
              October 2002.
            </p>
            <img
              src={`${process.env.PUBLIC_URL}/factory1.jpg`}
              alt="View of the Beach 1900 factory"
            />
          </div>
          <div className="facts_info info_reverse">
            <p>
              The aircraft was designed to carry passengers in all weather
              conditions from airports with relatively short runways. It is
              capable of flying in excess of 600 miles (970 km), although few
              operators use its full-fuel range. In terms of the number of
              aircraft built and its continued use by many passenger airlines
              and other users, it is one of the most popular 19-passenger
              airliners in history.
            </p>
            <img
              src={`${process.env.PUBLIC_URL}/factory2.jpg`}
              alt="View of the Beaach 1900 factory"
            />
          </div>
          <div className="facts_excerpt_wrapper">
            <h2>
              List and info of all known operators who no longer fly the Beech
              1900.
            </h2>
            {/* {this.props.store.factsData
              .slice()
              .map(fact => <FactExcerpt key={fact.id} {...fact} />)} */}
          {/* </div> */}
        </div>
      </React.Fragment>
    );
  }
}

const mapState = state => ({
  nav: state.nav
});

export default compose(
  withFirestore,
  connect(
    mapState,
    null
  )
)(Facts);
