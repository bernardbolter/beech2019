import React, { Component } from "react";
import { connect } from "react-redux";

import "./search.sass";

class IncidentSearch extends Component {
  render() {
    const {
      showSearch,
      incidentsOlderChecked,
      incidentsNewerChecked,
      incidentsFilter,
      incidentsFatalitiesChecked,
      incidentsType
    } = this.props.nav;
    return (
      <div
        className={
          showSearch
            ? "incident-search incident-search-open"
            : "incident-search"
        }
      >
        <div className="incident-column-one">
          <p>sort by</p>
          <label htmlFor="older" className="sort-label check-older">
            <span>older </span>
            <input
              type="checkbox"
              id="older"
              value="older"
              checked={incidentsOlderChecked}
              //   onChange={this.toggleSorting}
            />
          </label>
          <label htmlFor="newer" className="sort-label check-newer">
            <span>newer </span>
            <input
              type="checkbox"
              id="newer"
              value="newer"
              checked={incidentsNewerChecked}
              //   onChange={this.toggleSorting}
            />
          </label>

          <input
            className="search-input filter"
            placeholder="search city, airport, operator, reg"
            type="text"
            value={incidentsFilter}
            // onChange={this.filterIncidents}
          />
        </div>

        <div className="incident-column-two">
          <div
            className="search-reset"
            // onClick={this.props.store.incidentsSearchReset}
          >
            <svg
              id="reset-svg"
              width="18px"
              height="20px"
              viewBox="0 0 18 20"
              version="1.1"
            >
              <g>
                <path d="M16.2378148,11.0185282 L16.2378148,11.0277564 C16.2378148,15.0773034 12.9756496,18.3717673 8.92637405,18.3717673 C4.87682708,18.3717673 1.6122191,15.0773034 1.6122191,11.0277564 C1.6122191,7.0039941 4.83828581,3.72744376 8.90954617,3.68645974 L8.90954617,5.02780432 C8.90954617,5.79862962 9.59894626,5.81844308 9.98083048,5.47482871 L12.7910858,3.38111521 C12.7910858,3.38111521 13.0972446,3.12544006 13.0972446,2.84398026 C13.0972446,2.54840676 12.7859289,2.30684531 12.7859289,2.30684531 L9.98164473,0.21313182 C9.59976051,-0.130482555 8.90954617,-0.11039767 8.90954617,0.660156207 L8.90954617,2.05768418 C4.02403374,2.0986682 0,6.10587406 0,11.027485 C0,15.975152 3.98603531,20 8.9334309,20 C13.8802837,20.0002714 17.866319,15.9754234 17.866319,11.0277564 L17.866319,11.0185282 C17.866319,11.0185282 17.866319,10.1024946 17.0420244,10.1024946 C16.2673993,10.1022232 16.2378148,11.0185282 16.2378148,11.0185282 Z" />
              </g>
            </svg>
            <p>reset</p>
          </div>
          <p>filter by</p>
          <label htmlFor="fatalities" className="filter-label check-fatalities">
            <input
              type="checkbox"
              id="fatalities"
              value="fatalities"
              checked={incidentsFatalitiesChecked}
              //   onChange={this.toggleFatalities}
            />
            <span> Fatalities</span>
          </label>
          <select
            value={incidentsType}
            // onChange={this.handleIncidentTypeChange}
          >
            {/* <option>Select Incident Type</option>
            {this.state.incidentTypeCount.map(incidents => (
              <option key={incidents} value={incidents}>
                {incidents}
              </option>
            ))} */}
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(IncidentSearch);
