import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import "./editIncidentForm.sass";

class EditIncidentForm extends Component {
  state = {
    newIncident: false
  };

  render() {
    const { handleSubmit, planeInfo } = this.props;
    const { newIncident } = this.state;
    console.log(planeInfo);
    return (
      <form
        onSubmit={handleSubmit(this.checkForm)}
        className="edit-indicent-form-wrap"
      >
        <h2>Edit Incident Form</h2>

        <div className="new-incident-wrap" onClick={this.toggleNewIncident}>
          <div
            className={newIncident ? "new-toggle new-toggle-on" : "new-toggle"}
          >
            <span
              className={
                newIncident ? "toggle-ball toggle-ball-on" : "toggle-ball"
              }
            />
          </div>
          <p>check to create new incident</p>
        </div>

        <div className="edit-incident-field">
          <label htmlFor="serial">serial</label>
          <Field
            name="serial"
            component="input"
            type="text"
            placeholder={newIncident ? "" : planeInfo.serial}
          />
        </div>

        <div className="edit-incident-field">
          <label htmlFor="date">date</label>
          <Field
            name="date"
            component="input"
            type="text"
            placeholder={planeInfo.date}
          />
        </div>

        <div className="edit-incident-field">
          <label htmlFor="registration">registration</label>
          <Field
            name="registration"
            component="input"
            type="text"
            placeholder={planeInfo.registration}
          />
        </div>

        <div className="edit-incident-field">
          <label htmlFor="operator">operator</label>
          <Field
            name="operator"
            component="input"
            type="text"
            placeholder={planeInfo.operator}
          />
        </div>

        <div className="edit-incident-field">
          <label htmlFor="locationCity">locationCity</label>
          <Field
            name="locationCity"
            component="input"
            type="text"
            placeholder={planeInfo.locationCity}
          />
        </div>
      </form>
    );
  }

  toggleNewIncident = () => {
    console.log("clicking");
    this.setState(prevState => ({
      newIncident: !prevState.newIncident
    }));
  };

  checkForm = values => {
    console.log(values);
  };
}

const actions = {};

export default connect(
  null,
  actions
)(reduxForm({ form: "editIncidentForm" })(EditIncidentForm));
