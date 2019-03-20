import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import store from "./store";

import Home from "./components/home/home";
import Airplanes from "./components/airplanes/airplanes";
import AirplaneSingle from "./components/airplanes/airplane-single";
import Incidents from "./components/incidents/incidents";
import History from "./components/history/history";
import ModalManager from "./features/modals/modalManager";

const browserHistory = createBrowserHistory();

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <div className="container">
          <ModalManager />
          <Route exact path="/" component={Home} />
          <Route exact path="/airplanes" component={Airplanes} />
          <Route path="/airplanes/:serial" component={AirplaneSingle} />
          <Route path="/incidents" component={Incidents} />
          <Route path="/history" component={History} />
        </div>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
