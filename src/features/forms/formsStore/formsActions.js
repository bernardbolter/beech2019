import { SEND_MESSAGE } from "./formsTypes";
import cuid from "cuid";

export const modifyAirplaneData = (values, id, planeUID) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  console.log(getState());
  const firestore = getFirestore();
  let fullPlaneRef = firestore.collection("airplanes").doc(planeUID);
  let planeExceptRef = firestore.collection("base").doc("airplaneExcerpts");
  const batchKeyArray = [
    "serial",
    "currentStatus",
    "factoryDate",
    "latestReg",
    "latestOperator",
    "latestCountry"
  ];
  try {
    await values.map(value => {
      const planeEntries = Object.entries(value);
      const theKey = planeEntries[0][0];
      const theChange = planeEntries[0][1].new;
      const dbVar = `${id}.${theKey}`;
      var batch = firestore.batch();
      if (batchKeyArray.indexOf(theKey) !== -1) {
        if (theKey === "latestCountry") {
          let underCountry = theChange.split(" ").join("_");
          let underCountryVar = `${id}.countryName`;
          batch.update(planeExceptRef, {
            [underCountryVar]: underCountry
          });
        }
        batch.update(planeExceptRef, {
          [dbVar]: theChange
        });
        batch.update(fullPlaneRef, {
          [theKey]: theChange
        });
      } else {
        batch.update(fullPlaneRef, {
          [theKey]: theChange
        });
      }
      return batch.commit().then(function() {
        dispatch({
          type: SEND_MESSAGE,
          message: "Update Successful.",
          which: "airplane update"
        });
      });
    });
  } catch (error) {
    dispatch({
      type: SEND_MESSAGE,
      message: error,
      which: "airplane update"
    });
  }
};

export const uploadIncidentImage = (file, fileName, id) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const uniqName = cuid();
  const firebase = getFirebase();
  const firestore = getFirestore();
  const path = "/incident_images";
  const options = {
    name: uniqName
  };
  try {
    // upload file to firebase storage
    let uploadedFile = await firebase.uploadFile(path, file, null, options);
    let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
    const dbVarURL = `${id}.image`;
    const dbVarName = `${id}.image_name`;
    await firestore
      .collection("base")
      .doc("incidents")
      .update({
        [dbVarURL]: downloadURL,
        [dbVarName]: uniqName
      });
    dispatch({
      type: SEND_MESSAGE,
      message: "photo uploaded succesfully.",
      which: "upload photo"
    });
  } catch (error) {
    dispatch({
      type: SEND_MESSAGE,
      message: error.message,
      which: "upload photo"
    });
  }
};

export const deleteIncidentImage = (photoName, id) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const dbVarURL = `${id}.image`;
  const dbVarName = `${id}.image_name`;
  try {
    await firebase.deleteFile(`/incident_images/${photoName}`);
    await await firestore
      .collection("base")
      .doc("incidents")
      .update({
        [dbVarURL]: "",
        [dbVarName]: ""
      });
    await dispatch({
      type: SEND_MESSAGE,
      message: "Image succefully deleted",
      which: "delete photo"
    });
  } catch (error) {
    await dispatch({
      type: SEND_MESSAGE,
      message: error,
      which: "delete photo"
    });
  }
};

export const modifyIncidentData = (values, id) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  let incidentsRef = firestore.collection("base").doc("incidents");
  try {
    var batch = firestore.batch();
    await values.map(value => {
      const planeEntries = Object.entries(value);
      const theKey = planeEntries[0][0];
      const theChange = planeEntries[0][1].new;
      const dbVar = `${id}.${theKey}`;
      return batch.update(incidentsRef, {
        [dbVar]: theChange
      });
    });
    await batch.commit().then(function() {
      dispatch({
        type: SEND_MESSAGE,
        message: "Update Successful.",
        which: "update incident"
      });
    });
  } catch (error) {
    dispatch({
      type: SEND_MESSAGE,
      message: error.message,
      which: "update incident"
    });
  }
};
