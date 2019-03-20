import React from "react";
import { connect } from "react-redux";

import Header from "../header/header";

import {
  toggleSearch,
  toggleNavigation
} from "../header/headerStore/navActions";

import "./history.sass";

const History = props => {
  const { match } = props;
  return (
    <React.Fragment>
      <div>
        <Header match={match} />
      </div>
      <section className="history-wrap">
        <div className="history-container">
          <h1>BEECH 1900 MODEL HISTORY</h1>
          <h3>
            The Beech 1900 can trace its history back to 1949, when Beechcraft
            first flew the Model 50 “Twin Bonanza”, a light-twin reciprocating
            airplane, for the US military. Though dissimilar to the Bonanza
            model of the time, the company used the “Bonanza” title to
            capitalize on the brand recognition of the popular single-engine
            type.
          </h3>
          <h3>
            Later, a longer cabin and larger engines were mated to the Model 50
            airframe, creating the Model 65 “Queen Air”, beginning in 1965. The
            Model 90 “King Air” saw an addition of pressurization and turboprop
            engines in the same period. Then, the fuselage was stretched again,
            the turboprop engines made more powerful for 1972’s Model 200 “Super
            King Air.”
          </h3>
          <h3>
            In the early 1980s, several competing 19-seat turboprop models were
            entering the airline market, designed to take advantage of the FAA’s
            lack of flight attendant requirements for up to 19 passengers. In
            the US, these were the Swearingen “Metroliner” and the British
            Aerospace “Jetstream.” The Metroliner and Jetstream were designed to
            use the Garret TPE-331 engine, while the new Beech model, put forth
            by Raytheon, would employ the Pratt &amp; Whitney PT-6A turboprop.
          </h3>
          <h3>
            Raytheon celebrated the first flight of the Beech 1900 on September
            3 rd , 1982. The FAA awarded original type certification on November
            22 nd , 1983. Raytheon commonly used the nickname “Airliner” when
            referring the Model 1900 in print and publications. Since the
            Airliner name was originally and simultaneously applied by Raytheon
            to the smaller Model 99, the aviation community continues to use the
            Model 1900 number exclusively in common referral.
          </h3>
        </div>
      </section>
    </React.Fragment>
  );
};

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
