import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";

import Header from "../header/header";

import { filterHomeData } from "./homeStore/homeActions";

import "./home.sass";

class Home extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.base !== prevProps.base) {
      this.props.filterHomeData(this.props.base);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Header match={this.props.match} />
        </div>
        <section
          className={this.props.openMobileNav ? "home home-open" : "home"}
        >
          <div className="home-text">
            <h1>
              Welcome to Beech1900.com! This website is an active database of
              information about this turboprop airline which was produced
              between 1984 and 2002. You'll find it a comprehensive and reliable
              provider of information, meant to be shared with my fellow
              aviation enthusiasts.
            </h1>
            <h1>
              In 2006, former Captain and aviation enthusiast Aaron Kahn came up
              with this idea and started keeping track of the movements and
              statuses of all the Beech 1900s. Aaron’s hope is that you’ll enjoy
              this website and share it with your friends.
            </h1>
            <p>below are the top rankings of the stats</p>
          </div>

          {this.props.home.homeDataLoaded && isLoaded(this.props.base) ? (
            <div className="home-grid">
              <h1>THE GRID</h1>
              {/* {this._makeGridRow('currentStatus')}
                {this._makeGridRow('airplaneProduction')}
                {this._makeGridRow('latestOperator')}
                {this._makeGridRow('latestCountry')}
                {this._makeGridRow('serial')}
                {this._makeGridRow('accidentType')} */}
            </div>
          ) : (
            <div>
              <h1>NO DATA</h1>
              <button onClick={() => this.props.sendHomeData(this.props.base)}>
                push it
              </button>
            </div>
          )}

          <div className="home-footer">
            <p>
              Beech1900.com | all rights reserved - {new Date().getFullYear()}
            </p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  base: state.firestore.ordered.base,
  home: state.home
});

export default compose(
  firestoreConnect([{ collection: "base" }]),
  connect(
    mapStateToProps,
    { filterHomeData }
  )
)(Home);
