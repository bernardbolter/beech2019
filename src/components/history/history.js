import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../header/header";
import HistoryIntro from "./historyIntro";
import HistoryVarients from "./historyVarients";
import HistoryStory from "./historyStory";
import HistoryCharts from "./historyCharts";

import {
  toggleSearch,
  toggleNavigation
} from "../header/headerStore/navActions";

import "./history.sass";

class History extends Component {
  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <div>
          <Header match={match} />
        </div>
        <section className="history-wrap">
          <HistoryIntro />
          <HistoryVarients />
          <HistoryStory />
          <HistoryCharts />
        </section>
      </React.Fragment>
    );
  }
}

const mapState = state => ({
  nav: state.nav
});

const actions = {
  toggleSearch,
  toggleNavigation
};

export default connect(
  mapState,
  actions
)(History);
