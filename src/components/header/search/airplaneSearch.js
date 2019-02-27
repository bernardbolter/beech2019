import React, { Component } from "react";
import { connect } from "react-redux";

import {
  changeAirplaneSearchText,
  changeAirplaneSort,
  changeAirplaneFilter,
  changeAirplaneDropdown,
  handleAirplaneReset
} from "../headerStore/searchAirplanesActions";

class AirplaneSearch extends Component {
  handleTextChange = e => {
    this.props.changeAirplaneSearchText(e.target.value);
  };

  handleSortChange = e => {
    this.props.changeAirplaneSort(e.target.value);
  };

  handleFilterChange = e => {
    this.props.changeAirplaneFilter(e.target.value);
  };

  handleDropdownChange = e => {
    this.props.changeAirplaneDropdown(e.target.value, e.target.id);
  };

  render() {
    const {
      showSearch,
      airplanesOlderChecked,
      airplanesNewerChecked,
      airplanesSearchText,
      uaChecked,
      ubChecked,
      ucChecked,
      udChecked,
      ueChecked,
      operatingChecked,
      operatingNonCurrentChecked,
      nonFlyingChecked,
      partedOutChecked,
      destroyedChecked,
      airplanesLatestOperatorValue,
      airplanesCountryValue
    } = this.props.searchAirplanes;
    const { uniqueCountries, uniqueOperators } = this.props.baseData;

    return (
      <div className={showSearch ? "search search-open" : "search"}>
        <div className="search-column-one">
          <p>sort by</p>
          <label htmlFor="older" className="sort-label check-older">
            <span>older </span>
            <input
              type="checkbox"
              id="older"
              value="older"
              checked={airplanesOlderChecked}
              onChange={this.handleSortChange}
            />
          </label>
          <label htmlFor="newer" className="sort-label check-newer">
            <span>newer </span>
            <input
              type="checkbox"
              id="newer"
              value="newer"
              checked={airplanesNewerChecked}
              onChange={this.handleSortChange}
            />
          </label>
          <input
            className="search-input filter"
            placeholder="search serial and reg"
            type="text"
            value={airplanesSearchText}
            onChange={this.handleTextChange}
          />
        </div>

        <div className="search-column-two">
          <p>filter by</p>
          <label htmlFor="ua" className="filter-label check-ua">
            <input
              type="checkbox"
              id="ua"
              value="ua"
              checked={uaChecked}
              onChange={this.handleFilterChange}
            />
            <span> UA</span>
          </label>
          <label htmlFor="ub" className="filter-label check-ub">
            <input
              type="checkbox"
              id="ub"
              value="ub"
              checked={ubChecked}
              onChange={this.handleFilterChange}
            />
            <span> UB</span>
          </label>
          <label htmlFor="uc" className="filter-label check-uc">
            <input
              type="checkbox"
              id="uc"
              value="uc"
              checked={ucChecked}
              onChange={this.handleFilterChange}
            />
            <span> UC</span>
          </label>
          <label htmlFor="ud" className="filter-label check-ud">
            <input
              type="checkbox"
              id="ud"
              value="ud"
              checked={udChecked}
              onChange={this.handleFilterChange}
            />
            <span> UD</span>
          </label>
          <label htmlFor="ue" className="filter-label check-ue">
            <input
              type="checkbox"
              id="ue"
              value="ue"
              checked={ueChecked}
              onChange={this.handleFilterChange}
            />
            <span> UE</span>
          </label>
        </div>

        <div className="search-column-three">
          <label htmlFor="operating" className="filter-label check-operating">
            <input
              type="checkbox"
              id="operating"
              value="operating"
              checked={operatingChecked}
              onChange={this.handleFilterChange}
            />
            <span> Operating</span>
          </label>
          <label
            htmlFor="operatingNonCurrent"
            className="filter-label check-operatingNonCurrent"
          >
            <input
              type="checkbox"
              id="operatingNonCurrent"
              value="operatingNonCurrent"
              checked={operatingNonCurrentChecked}
              onChange={this.handleFilterChange}
            />
            <span> Operating (Non-Current)</span>
          </label>
          <label htmlFor="nonFlying" className="filter-label check-nonFlying">
            <input
              type="checkbox"
              id="nonFlying"
              value="nonFlying"
              checked={nonFlyingChecked}
              onChange={this.handleFilterChange}
            />
            <span> Non-Flying</span>
          </label>
          <label htmlFor="partedOut" className="filter-label check-partedOut">
            <input
              type="checkbox"
              id="partedOut"
              value="partedOut"
              checked={partedOutChecked}
              onChange={this.handleFilterChange}
            />
            <span> Parted-Out</span>
          </label>
          <label htmlFor="destroyed" className="filter-label check-destroyed">
            <input
              type="checkbox"
              id="destroyed"
              value="destroyed"
              checked={destroyedChecked}
              onChange={this.handleFilterChange}
            />
            <span> Destroyed</span>
          </label>
        </div>

        <div className="search-column-four">
          <div
            className="search-reset"
            onClick={this.props.handleAirplaneReset}
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
          <select
            id="operator"
            value={airplanesLatestOperatorValue}
            onChange={this.handleDropdownChange}
          >
            <option defaultValue="selected">Select Latest Operator</option>
            {uniqueOperators.map((operator, i) => (
              <option key={i} value={operator}>
                {operator}
              </option>
            ))}
          </select>
          <select
            id="country"
            value={airplanesCountryValue}
            onChange={this.handleDropdownChange}
          >
            <option>Select Country</option>
            {uniqueCountries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchAirplanes: state.searchAirplanes,
  baseData: state.baseData
});

export default connect(
  mapStateToProps,
  {
    changeAirplaneSearchText,
    changeAirplaneSort,
    changeAirplaneFilter,
    changeAirplaneDropdown,
    handleAirplaneReset
  }
)(AirplaneSearch);
