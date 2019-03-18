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
          console.log(underCountry);
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
      batch.commit().then(function() {
        dispatch({
          type: SEND_MESSAGE,
          payload: "Update Successful."
        });
      });
    });
  } catch (error) {
    dispatch({
      type: SEND_MESSAGE,
      payload: error
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
      payload: "photo uploaded succesfully"
    });
  } catch (error) {
    dispatch({
      type: SEND_MESSAGE,
      payload: error.message
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
  } catch (error) {
    console.log(error);
    throw new Error("problem deleting the photo");
  }
};
