import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";
import "cropperjs/dist/cropper.css";

import {
  uploadIncidentImage,
  deleteIncidentImage
} from "./formsStore/formsActions";

import "./editIncidentForm.sass";

class EditIncidentForm extends Component {
  constructor() {
    super();
    this.state = {
      imageLoadedForPreview: false,
      newIncident: false,
      files: [],
      fileName: "",
      image: {},
      incidentFieldsToBeChanges: {}
    };
  }

  componentDidMount() {
    if (this.props.type === "new") {
      this.setState({
        newIncident: true
      });
    }
  }

  renderField = field => {
    if (this.state.newIncident) {
      field.input.value = "";
    }
    return (
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
  };

  render() {
    console.log(this.state);
    console.log(this.props);
    const {
      handleSubmit,
      planeInfo,
      myForm: { editAirplaneFormMessage }
    } = this.props;
    const {
      newIncident,
      imageLoadedForPreview,
      incidentFieldsToBeChanges
    } = this.state;
    if (
      Object.keys(incidentFieldsToBeChanges).length === 0 &&
      incidentFieldsToBeChanges.constructor === Object
    ) {
      return (
        <form
          onSubmit={handleSubmit(this.checkForm)}
          className="edit-indicent-form-wrap"
        >
          {newIncident ? (
            <h2>Add New Incident</h2>
          ) : (
            <h2>Edit Incident Form</h2>
          )}

          <Field
            name="serial"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="date"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="registration"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="operator"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="locationCity"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="locationAirport"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="fatalities"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="accidentType"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="editorial"
            component={this.renderField}
            props={{ type: "textarea" }}
          />

          <Field
            name="additionalInfo"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="ntsbreportNumber"
            component={this.renderField}
            props={{ type: "input" }}
          />

          <Field
            name="otherReport"
            component={this.renderField}
            props={{ type: "input" }}
          />

          {newIncident ? null : (
            <div className="edit-incident-field">
              {planeInfo.image === "" ? (
                <p>image: yes</p>
              ) : (
                <div
                  className="edit-button"
                  onClick={this.handleDeleteImage(planeInfo.image_name)}
                >
                  <p>delete image</p>
                </div>
              )}
            </div>
          )}

          {imageLoadedForPreview ? (
            <div className="dropzone-preview-cropper-wrap">
              <div className="dropzone-preview">
                <h2>Image Preview</h2>
                {this.state.files[0] && (
                  <div className="dropzone-preview">
                    <img
                      src={this.state.files[0].preview}
                      alt="dropzone preview"
                    />
                  </div>
                )}
              </div>
              <div className="edit-button" onClick={this.uploadImage}>
                <p>upload image</p>
              </div>
            </div>
          ) : (
            <div className="dropzone-wrap">
              <h2>{planeInfo.image === "" ? "Add Image" : "Replace Image"}</h2>
              <Dropzone
                className="dropzone"
                onDrop={this.onDrop}
                multiple={false}
              >
                <p>Drop photo here or click to upload</p>
              </Dropzone>
            </div>
          )}
          {editAirplaneFormMessage !== "" ? (
            <p>{editAirplaneFormMessage}</p>
          ) : null}
          <button className="edit-airplane-button submit" type="submit">
            <p>submit</p>
          </button>
        </form>
      );
    } else {
      return <h1>to change</h1>;
    }
  }

  uploadImage = async () => {
    const tempURL = new File([this.state.files[0]], "uploadPhoto");
    try {
      await this.props.uploadIncidentImage(
        tempURL,
        this.state.fileName,
        this.props.planeInfo.id
      );
    } catch (error) {
      this.setState({
        editAirplaneFormMessage: error
      });
    }
  };

  handleDeleteImage = photoName => () => {
    console.log(photoName);
    try {
      this.props.deleteIncidentImage(photoName, this.props.planeInfo.id);
    } catch (error) {
      console.log(error);
    }
  };

  onDrop = files => {
    console.log(files);
    this.setState({
      imageLoadedForPreview: true,
      files,
      fileName: files[0].name
    });
    console.log(this.state);
  };

  checkForm = (values, dispatch, props) => {
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
    console.log(objectOfChanges);
    this.setState({ incidentFieldsToBeChanges: objectOfChanges });
    console.log(this.state.incidentFieldsToBeChanges);
  };
}

const mapState = (state, props) => ({
  initialValues: props.planeInfo,
  myForm: state.myForm
});

const actions = {
  uploadIncidentImage,
  deleteIncidentImage
};

export default connect(
  mapState,
  actions
)(
  reduxForm({ form: "editIncidentForm", enableReinitialize: true })(
    EditIncidentForm
  )
);
