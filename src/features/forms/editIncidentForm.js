import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import { uploadIncidentImage } from "./formsStore/formsActions";

import "./editIncidentForm.sass";

class EditIncidentForm extends Component {
  constructor() {
    super();
    this.state = {
      imageLoadedForPreview: false,
      newIncident: false,
      files: [],
      fileName: "",
      cropResult: null,
      image: {}
    };
  }

  render() {
    const { handleSubmit, planeInfo } = this.props;
    const { newIncident, imageLoadedForPreview } = this.state;
    return (
      <form
        onSubmit={handleSubmit(this.checkForm)}
        className="edit-indicent-form-wrap"
      >
        {newIncident ? <h2>Add New Incident</h2> : <h2>Edit Incident Form</h2>}

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
            placeholder={newIncident ? "" : planeInfo.date}
          />
        </div>

        <div className="edit-incident-field">
          <label htmlFor="registration">registration</label>
          <Field
            name="registration"
            component="input"
            type="text"
            placeholder={newIncident ? "" : planeInfo.registration}
          />
        </div>

        <div className="edit-incident-field">
          <label htmlFor="operator">operator</label>
          <Field
            name="operator"
            component="input"
            type="text"
            placeholder={newIncident ? "" : planeInfo.operator}
          />
        </div>

        <div className="edit-incident-field">
          <label htmlFor="locationCity">locationCity</label>
          <Field
            name="locationCity"
            component="input"
            type="text"
            placeholder={newIncident ? "" : planeInfo.locationCity}
          />
        </div>

        <div className="edit-incident-field">
          <label htmlFor="locationAirport">locationAirport</label>
          <Field
            name="locationAirport"
            component="input"
            type="text"
            placeholder={newIncident ? "" : planeInfo.locationAirport}
          />
        </div>

        <div className="edit-incident-field">
          <label htmlFor="fatalities">fatalities</label>
          <Field
            name="fatalities"
            component="input"
            type="text"
            placeholder={newIncident ? "" : planeInfo.fatalities}
          />
        </div>

        <div className="edit-incident-field">
          <label htmlFor="accidentType">accidentType</label>
          <Field
            name="accidentType"
            component="input"
            type="text"
            placeholder={newIncident ? "" : planeInfo.accidentType}
          />
        </div>

        <div className="edit-incident-textarea">
          <label htmlFor="editorial">editorial</label>
          <Field
            name="editorial"
            component="textarea"
            type="text"
            placeholder={newIncident ? "" : planeInfo.editorial}
          />
        </div>

        <div className="edit-incident-field">
          <label htmlFor="additionalInfo">additionalInfo</label>
          <Field
            name="additionalInfo"
            component="input"
            type="text"
            placeholder={newIncident ? "" : planeInfo.additionalInfo}
          />
        </div>

        <div className="edit-incident-field">
          <label htmlFor="ntsbreportNumber">ntsbreportNumber</label>
          <Field
            name="ntsbreportNumber"
            component="input"
            type="text"
            placeholder={newIncident ? "" : planeInfo.ntsbreportNumber}
          />
        </div>

        <div className="edit-incident-field">
          <label htmlFor="otherReport">otherReport</label>
          <Field
            name="otherReport"
            component="input"
            type="text"
            placeholder={newIncident ? "" : planeInfo.otherReport}
          />
        </div>

        <div className="edit-incident-field">
          <p>
            image:
            {planeInfo.image === "" ? " no" : " yes"}
          </p>
        </div>

        {imageLoadedForPreview ? (
          <div className="dropzone-preview-cropper-wrap">
            <div className="dropzone-cropper" />
            <h2>Crop Image</h2>
            <Cropper
              className="cropper-itself"
              ref="cropper"
              src={this.state.files[0].preview}
              viewMode={0}
              dragMode="move"
              guides={false}
              scalable={true}
              cropBoxMovable={true}
              cropBoxResizable={true}
              crop={this.cropImage}
            />
            <div className="dropzone-preview">
              <h2>Image Preview</h2>
              {this.state.files[0] && (
                <div className="dropzone-preview">
                  <img src={this.state.cropResult} />
                </div>
              )}
            </div>
            <div className="dropzone-upload" onClick={this.uploadImage}>
              <p>upload image</p>
            </div>
            <div className="dropzone-cancel" onClick={this.cancelCrop}>
              <p>cancel upload</p>
            </div>
          </div>
        ) : (
          <div className="dropzone-wrap">
            <h2>Add Image</h2>
            <Dropzone
              className="dropzone"
              onDrop={this.onDrop}
              multiple={false}
            >
              <p>Drop photo here or click to upload</p>
            </Dropzone>
          </div>
        )}
      </form>
    );
  }

  uploadImage = async () => {
    try {
      await this.props.uploadIncidentImage(
        this.state.image,
        this.state.fileName,
        this.props.planeInfo.id
      );
      this.cancelCrop();
    } catch (error) {
      console.log(error);
    }
  };

  cancelCrop = () => {
    this.setState({
      files: [],
      image: {},
      imageLoadedForPreview: false
    });
  };

  cropImage = () => {
    if (typeof this.refs.cropper.getCroppedCanvas() === "undefined") {
      return;
    }

    this.refs.cropper.getCroppedCanvas().toBlob(blob => {
      let imageUrl = URL.createObjectURL(blob);
      this.setState({
        cropResult: imageUrl,
        image: blob
      });
    }, "image/jpeg");
  };

  onDrop = files => {
    this.setState({
      imageLoadedForPreview: true,
      files,
      fileName: files[0].name
    });
  };

  toggleNewIncident = () => {
    this.setState(prevState => ({
      newIncident: !prevState.newIncident
    }));
  };

  checkForm = values => {
    console.log(values);
  };
}

const actions = {
  uploadIncidentImage
};

export default connect(
  null,
  actions
)(reduxForm({ form: "editIncidentForm" })(EditIncidentForm));
