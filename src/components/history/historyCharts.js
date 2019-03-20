import React from "react";
import { connect } from "react-redux";

import { openModal } from "../../features/modals/modalStore/modalActions";

import serviceCharts from "./service-charts.json";

const HistoryCharts = props => {
  const charts = serviceCharts.serviceCharts;
  const { openModal } = props;
  return (
    <section className="history-container history-container-second">
      <h1>SERVICE CHARTS</h1>
      <div className="history-charts-wrap">
        {charts.map(chart => {
          return (
            <div
              key={chart.id}
              className="service-chart-wrap"
              onClick={() => openModal("ChartModal", chart)}
            >
              <p>{chart.name}</p>
              <img
                src={`${process.env.PUBLIC_URL}/${chart.thumb}`}
                alt={`Service Chart for ${chart.name}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

const actions = {
  openModal
};

export default connect(
  null,
  actions
)(HistoryCharts);
