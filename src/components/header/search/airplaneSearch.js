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
      airplanesOlderChecked,
      airplanesNewerChecked,
      airplanesSearchText,
      uaChecked,
      ubChecked,
      ucChecked,
      udChecked,
      ueChecked,
      operatingChecked,
      unknownChecked,
      nonFlyingChecked,
      partedOutChecked,
      destroyedChecked,
      airplanesOperatorValue,
      airplanesOperators,
      airplanesCountryValue,
      airplanesCountries
    } = this.props.searchAirplanes;

    return (
      <div
        className={this.props.nav.showSearch ? "search search-open" : "search"}
      >
        <div className="search-column-one">
          <p className="search-heading">sort by</p>
          <div className="checkbox-wrap">
            <input
              className="check-input"
              type="checkbox"
              id="older"
              value="older"
              checked={airplanesOlderChecked}
              onChange={this.handleSortChange}
            />
            <label htmlFor="older" className="checkbox check-older">
              <div className="check-circle">
                <span className="circle-inside" />
              </div>

              <p>older</p>
            </label>
          </div>
          <div className="checkbox-wrap">
            <input
              className="check-input"
              type="checkbox"
              id="newer"
              value="newer"
              checked={airplanesNewerChecked}
              onChange={this.handleSortChange}
            />
            <label htmlFor="newer" className="checkbox check-newer">
              <div className="check-circle">
                <span className="circle-inside" />
              </div>
              <p>newer</p>
            </label>
          </div>
          <div className="search-input">
            <input
              className="search-input filter"
              placeholder="search serial and reg"
              type="text"
              value={airplanesSearchText}
              onChange={this.handleTextChange}
            />
          </div>
        </div>

        <div className="search-divider" />

        <div className="search-column-two">
          <p className="search-heading">filter by</p>
          <div className="checkbox-wrap">
            <input
              className="check-input"
              type="checkbox"
              id="ua"
              value="ua"
              checked={uaChecked}
              onChange={this.handleFilterChange}
            />
            <label htmlFor="ua" className="checkbox check-ua">
              <div className="check-square">
                <span className="square-inside">&#10003;</span>
              </div>
              <p> UA</p>
            </label>
          </div>
          <div className="checkbox-wrap">
            <input
              className="check-input"
              type="checkbox"
              id="ub"
              value="ub"
              checked={ubChecked}
              onChange={this.handleFilterChange}
            />
            <label htmlFor="ub" className="checkbox check-ub">
              <div className="check-square">
                <span className="square-inside">&#10003;</span>
              </div>
              <p> UB</p>
            </label>
          </div>
          <div className="checkbox-wrap">
            <input
              className="check-input"
              type="checkbox"
              id="uc"
              value="uc"
              checked={ucChecked}
              onChange={this.handleFilterChange}
            />
            <label htmlFor="uc" className="checkbox check-uc">
              <div className="check-square">
                <span className="square-inside">&#10003;</span>
              </div>
              <p> UC</p>
            </label>
          </div>
          <div className="checkbox-wrap">
            <input
              className="check-input"
              type="checkbox"
              id="ud"
              value="ud"
              checked={udChecked}
              onChange={this.handleFilterChange}
            />
            <label htmlFor="ud" className="checkbox check-ud">
              <div className="check-square">
                <span className="square-inside">&#10003;</span>
              </div>
              <p> UD</p>
            </label>
          </div>
          <div className="checkbox-wrap">
            <input
              className="check-input"
              type="checkbox"
              id="ue"
              value="ue"
              checked={ueChecked}
              onChange={this.handleFilterChange}
            />
            <label htmlFor="ue" className="checkbox check-ue">
              <div className="check-square">
                <span className="square-inside">&#10003;</span>
              </div>
              <p> UE</p>
            </label>
          </div>
        </div>

        <div className="search-column-three">
          <div className="checkbox-wrap">
            <input
              className="check-input"
              type="checkbox"
              id="operating"
              value="operating"
              checked={operatingChecked}
              onChange={this.handleFilterChange}
            />
            <label htmlFor="operating" className="checkbox check-ue">
              <div className="check-square">
                <span className="square-inside">&#10003;</span>
              </div>
              <p> Operating</p>
            </label>
          </div>

          <div className="checkbox-wrap">
            <input
              className="check-input"
              type="checkbox"
              id="nonFlying"
              value="nonFlying"
              checked={nonFlyingChecked}
              onChange={this.handleFilterChange}
            />
            <label htmlFor="nonFlying" className="checkbox check-ue">
              <div className="check-square">
                <span className="square-inside">&#10003;</span>
              </div>
              <p> Non-Flying</p>
            </label>
          </div>

          <div className="checkbox-wrap">
            <input
              className="check-input"
              type="checkbox"
              id="partedOut"
              value="partedOut"
              checked={partedOutChecked}
              onChange={this.handleFilterChange}
            />
            <label htmlFor="partedOut" className="checkbox check-ue">
              <div className="check-square">
                <span className="square-inside">&#10003;</span>
              </div>
              <p> Parted Out</p>
            </label>
          </div>

          <div className="checkbox-wrap">
            <input
              className="check-input"
              type="checkbox"
              id="destroyed"
              value="destroyed"
              checked={destroyedChecked}
              onChange={this.handleFilterChange}
            />
            <label htmlFor="destroyed" className="checkbox check-ue">
              <div className="check-square">
                <span className="square-inside">&#10003;</span>
              </div>
              <p> Destroyed</p>
            </label>
          </div>

          <div className="checkbox-wrap">
            <input
              className="check-input"
              type="checkbox"
              id="unknown"
              value="unknown"
              checked={unknownChecked}
              onChange={this.handleFilterChange}
            />
            <label htmlFor="unknown" className="checkbox check-ue">
              <div className="check-square">
                <span className="square-inside">&#10003;</span>
              </div>
              <p> Unknown</p>
            </label>
          </div>
        </div>

        <div className="search-column-four">
          <select
            id="operator"
            value={airplanesOperatorValue}
            onChange={this.handleDropdownChange}
          >
            <option defaultValue="selected">Select Operator</option>
            {airplanesOperators.map((operator, i) => (
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
            {airplanesCountries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="search-reset" onClick={this.props.handleAirplaneReset}>
          <svg
            id="reset-svg"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            version="1.1"
          >
            <g>
              <path d="M16.2378148,11.0185282 L16.2378148,11.0277564 C16.2378148,15.0773034 12.9756496,18.3717673 8.92637405,18.3717673 C4.87682708,18.3717673 1.6122191,15.0773034 1.6122191,11.0277564 C1.6122191,7.0039941 4.83828581,3.72744376 8.90954617,3.68645974 L8.90954617,5.02780432 C8.90954617,5.79862962 9.59894626,5.81844308 9.98083048,5.47482871 L12.7910858,3.38111521 C12.7910858,3.38111521 13.0972446,3.12544006 13.0972446,2.84398026 C13.0972446,2.54840676 12.7859289,2.30684531 12.7859289,2.30684531 L9.98164473,0.21313182 C9.59976051,-0.130482555 8.90954617,-0.11039767 8.90954617,0.660156207 L8.90954617,2.05768418 C4.02403374,2.0986682 0,6.10587406 0,11.027485 C0,15.975152 3.98603531,20 8.9334309,20 C13.8802837,20.0002714 17.866319,15.9754234 17.866319,11.0277564 L17.866319,11.0185282 C17.866319,11.0185282 17.866319,10.1024946 17.0420244,10.1024946 C16.2673993,10.1022232 16.2378148,11.0185282 16.2378148,11.0185282 Z" />
            </g>
          </svg>
          <p>reset</p>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  searchAirplanes: state.searchAirplanes,
  nav: state.nav
});

const actions = {
  changeAirplaneSearchText,
  changeAirplaneSort,
  changeAirplaneFilter,
  changeAirplaneDropdown,
  handleAirplaneReset
};

export default connect(
  mapState,
  actions
)(AirplaneSearch);
