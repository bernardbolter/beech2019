import React, { Component } from "react";
import { Field, reduxForm, isPristine } from "redux-form";
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
    let theDiff = {};
    Object.keys(values).forEach(key => {
      if (values[key] !== props.planeInfo[key]) {
        theDiff[key] = values[key];
      }
    });
    let arrayOfKeys = Object.keys(theDiff);
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
    this.props.modifyAirplaneData(
      changes,
      this.props.planeInfo.id,
      this.props.planeInfo.uid
    );
  };

  cancelDataUpload = () => {
    this.setState({ fieldsToBeChanged: {} });
  };

  renderField = field => (
    <div
      className={
        field.meta.dirty
          ? "edit-airplane-field edit-airplane-changed"
          : "edit-airplane-field"
      }
    >
      <label htmlFor={field.input.name}>{field.input.name}</label>
      {field.type === "textarea" ? (
        <textarea {...field.input} type="text" />
      ) : (
        <input {...field.input} type="text" />
      )}
    </div>
  );

  render() {
    console.log(this.props);
    const {
      handleSubmit,
      error,
      planeInfo,
      myForm: { editAirplaneFormMessage }
    } = this.props;
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

          <div className="edit-airplane-field-stay">
            <h5>serial: </h5>
            <p>{planeInfo.serial}</p>
          </div>

          <Field
            name="currentStatus"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="factoryDate"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="latestReg"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="latestOperator"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="latestCountry"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <p className="edit-airplane-sub-header">
            End of top level information
          </p>

          <Field
            name="currentstatusDate"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="dataSource"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="statusType"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="factoryReg"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="initialopReg"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="initialOperator"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="latestOwner"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="latestregDate"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="latestregStatus"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="notes"
            component={this.renderField}
            props={{ type: "textarea" }}
          />

          {eventNumbers.map(num => {
            num = num + 1;
            let eventComment = `event${num}Comment`;
            let eventDate = `event${num}Date`;
            let eventOperator = `event${num}Operator`;
            let eventOwner = `event${num}Owner`;
            return (
              <div className="edit-airplane-event-wrap" key={num}>
                <p>Info for Event Number {num}</p>
                <Field
                  name={eventDate}
                  component={this.renderField}
                  props={{ type: "input" }}
                />
                <Field
                  name={eventOwner}
                  component={this.renderField}
                  props={{ type: "input" }}
                />
                <Field
                  name={eventOperator}
                  component={this.renderField}
                  props={{ type: "input" }}
                />
                <Field
                  name={eventComment}
                  component={this.renderField}
                  props={{ type: "textarea" }}
                />
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
          {fieldsToBeChanged.length === 0 ? (
            <h2>no changes to be made</h2>
          ) : (
            fieldsToBeChanged.map((change, i) => {
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
            })
          )}
          {editAirplaneFormMessage !== "" ? (
            <p>{editAirplaneFormMessage}</p>
          ) : null}
          {fieldsToBeChanged.length === 0 ? null : (
            <div
              className="edit-airplane-button changes"
              onClick={() => this.submitData(this.state.fieldsToBeChanged)}
            >
              <p>submit changes</p>
            </div>
          )}

          <div
            className="edit-airplane-button cancel"
            onClick={this.cancelDataUpload}
          >
            {fieldsToBeChanged.length === 0 ? <p>go back</p> : <p>cancel</p>}
          </div>
        </div>
      );
    }
  }
}

const mapState = (state, props) => ({
  initialValues: props.planeInfo,
  myForm: state.myForm
});

const actions = {
  modifyAirplaneData
};

export default connect(
  mapState,
  actions
)(
  reduxForm({ form: "editAirplaneForm", enableReinitialize: true })(
    EditAirplaneForm
  )
);
