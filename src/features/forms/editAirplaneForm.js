import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { modifyAirplaneData } from "./formsStore/formsActions";

import "./editAirplaneForm.sass";

class EditAirplaneForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldsToBeChanged: {}
    };
  }

  submitFromForm = (values, dispatch, props) => {
    let arrayOfKeys = Object.keys(values);
    let objectOfChanges = arrayOfKeys.map((item, i) => {
      return {
        [item]: {
          old: props.planeInfo[item],
          new: values[item]
        }
      };
    });
    this.setState({ fieldsToBeChanged: objectOfChanges });
  };

  submitData = changes => {
    this.props.modifyAirplaneData(changes, this.props.planeInfo.id);
  };

  cancelDataUpload = () => {
    this.setState({ fieldsToBeChanged: {} });
    console.log(this.state.fieldsToBeChanged);
  };

  render() {
    const { handleSubmit, error, planeInfo } = this.props;
    const { fieldsToBeChanged } = this.state;
    const eventNumbers = [...Array(14).keys()];
    if (
      Object.keys(fieldsToBeChanged).length === 0 &&
      fieldsToBeChanged.constructor === Object
    ) {
      return (
        <form
          onSubmit={handleSubmit(this.submitFromForm)}
          className="edit-airplane-form"
        >
          <h2>Edit Airplane Info</h2>

          <div className="edit-airplane-field">
            <label htmlFor="serial">serial</label>
            <Field
              name="serial"
              component="input"
              type="text"
              placeholder={planeInfo.serial}
            />
          </div>

          <div className="edit-airplane-field">
            <label htmlFor="currentStatus">currentStatus</label>
            <Field
              name="currentStatus"
              component="input"
              type="text"
              placeholder={planeInfo.currentStatus}
            />
          </div>

          <div className="edit-airplane-field">
            <label htmlFor="factoryDate">factoryDate</label>
            <Field
              name="factoryDate"
              component="input"
              type="text"
              placeholder={planeInfo.factoryDate}
            />
          </div>

          <div className="edit-airplane-field">
            <label htmlFor="latestReg">latestReg</label>
            <Field
              name="latestReg"
              component="input"
              type="text"
              placeholder={planeInfo.latestReg}
            />
          </div>

          <div className="edit-airplane-field">
            <label htmlFor="latestOperator">latestOperator</label>
            <Field
              name="latestOperator"
              component="input"
              type="text"
              placeholder={planeInfo.latestOperator}
            />
          </div>

          <div className="edit-airplane-field">
            <label htmlFor="latestCountry">latestCountry</label>
            <Field
              name="latestCountry"
              component="input"
              type="text"
              placeholder={planeInfo.latestCountry}
            />
          </div>

          <p className="edit-airplane-sub-header">
            End of top level information
          </p>

          <div className="edit-airplane-field">
            <label htmlFor="currentstatusDate">currentstatusDate</label>
            <Field
              name="currentstatusDate"
              component="input"
              type="text"
              placeholder={planeInfo.currentstatusDate}
            />
          </div>

          <div className="edit-airplane-field">
            <label htmlFor="dataSource">dataSource</label>
            <Field
              name="dataSource"
              component="input"
              type="text"
              placeholder={planeInfo.dataSource}
            />
          </div>

          <div className="edit-airplane-field">
            <label htmlFor="statusType">statusType</label>
            <Field
              name="statusType"
              component="input"
              type="text"
              placeholder={planeInfo.statusType}
            />
          </div>

          <div className="edit-airplane-field">
            <label htmlFor="factoryReg">factoryReg</label>
            <Field
              name="factoryReg"
              component="input"
              type="text"
              placeholder={planeInfo.factoryReg}
            />
          </div>

          <div className="edit-airplane-field">
            <label htmlFor="initialopReg">initialopReg</label>
            <Field
              name="initialopReg"
              component="input"
              type="text"
              placeholder={planeInfo.initialopReg}
            />
          </div>

          <div className="edit-airplane-field">
            <label htmlFor="initialOperator">initialOperator</label>
            <Field
              name="initialOperator"
              component="input"
              type="text"
              placeholder={planeInfo.initialOperator}
            />
          </div>

          <div className="edit-airplane-field">
            <label htmlFor="latestOwner">latestOwner</label>
            <Field
              name="latestOwner"
              component="input"
              type="text"
              placeholder={planeInfo.latestOwner}
            />
          </div>

          <div className="edit-airplane-field">
            <label htmlFor="latestregDate">latestregDate</label>
            <Field
              name="latestregDate"
              component="input"
              type="text"
              placeholder={planeInfo.latestregDate}
            />
          </div>

          <div className="edit-airplane-field">
            <label htmlFor="latestregStatus">latestregStatus</label>
            <Field
              name="latestregStatus"
              component="input"
              type="text"
              placeholder={planeInfo.latestregStatus}
            />
          </div>

          <div className="edit-airplane-textarea">
            <label htmlFor="notes">notes</label>
            <Field
              name="notes"
              component="textarea"
              type="text"
              placeholder={planeInfo.notes}
            />
          </div>

          {eventNumbers.map(num => {
            num = num + 1;
            let eventComment = `event${num}Comment`;
            let eventDate = `event${num}Date`;
            let eventOperator = `event${num}Operator`;
            let eventOwner = `event${num}Owner`;
            return (
              <div className="edit-airplane-event-wrap" key={num}>
                <p>Info for Event Number {num}</p>
                <div className="edit-airplane-field">
                  <label htmlFor={eventDate}>{eventDate}</label>
                  <Field
                    name={eventDate}
                    component="input"
                    type="text"
                    placeholder={planeInfo[eventDate]}
                  />
                </div>
                <div className="edit-airplane-field">
                  <label htmlFor={eventOwner}>{eventOwner}</label>
                  <Field
                    name={eventOwner}
                    component="input"
                    type="text"
                    placeholder={planeInfo[eventOwner]}
                  />
                </div>
                <div className="edit-airplane-field">
                  <label htmlFor={eventOperator}>{eventOperator}</label>
                  <Field
                    name={eventOperator}
                    component="input"
                    type="text"
                    placeholder={planeInfo[eventOperator]}
                  />
                </div>
                <div className="edit-airplane-textarea">
                  <label htmlFor={eventComment}>{eventComment}</label>
                  <Field
                    name={eventComment}
                    component="textarea"
                    type="text"
                    placeholder={planeInfo[eventComment]}
                  />
                </div>
              </div>
            );
          })}

          <button className="edit-airplane-button submit" type="submit">
            <p>submit</p>
          </button>
        </form>
      );
    } else {
      return (
        <div className="edit-airplane-confirm-wrap">
          <h2>Changes to be made</h2>
          {fieldsToBeChanged.map((change, i) => {
            let objectEnt = Object.entries(change);
            const changeKey = objectEnt[0][0];
            const changeOld = objectEnt[0][1].old;
            const changeNew = objectEnt[0][1].new;
            return (
              <div className="change-wrap" key={i}>
                <h3>{changeKey}</h3>
                {changeOld === "" ? (
                  "Field was blank"
                ) : (
                  <p className="change-old">
                    <span>from </span>
                    {changeOld}
                  </p>
                )}
                <p className="change-new">
                  <span>to </span>
                  {changeNew}
                </p>
              </div>
            );
          })}
          <div
            className="edit-airplane-button changes"
            onClick={() => this.submitData(this.state.fieldsToBeChanged)}
          >
            <p>submit changes</p>
          </div>
          <div
            className="edit-airplane-button cancel"
            onClick={this.cancelDataUpload}
          >
            <p>cancel</p>
          </div>
        </div>
      );
    }
  }
}

const actions = {
  modifyAirplaneData
};

export default connect(
  null,
  actions
)(reduxForm({ form: "editAirplaneForm" })(EditAirplaneForm));
