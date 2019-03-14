import * as actionTypes from "./formsTypes";

export const modifyAirplaneData = (values, id) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  console.log(values);
  console.log(id);
  const firestore = getFirestore();
  let planeExceptRef = firestore.collection("base").doc("airplaneExcerpts");
  let allPlanesRef = firestore.collection("base").doc("airplanes");
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
      console.log(dbVar);
      if (batchKeyArray.indexOf(theKey) !== -1) {
        planeExceptRef.update({
          [dbVar]: theChange
        });
        // allPlanesRef.update({
        //   [dbVar]: theChange
        // });
      } else {
        allPlanesRef.update({
          [dbVar]: theChange
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
  console.log("finished");
};

export const uploadIncidentImage = (file, fileName, id) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const path = "/incident_images";
  const options = {
    name: fileName
  };
  try {
    // upload file to firebase storage
    let uploadedFile = await firebase.uploadFile(path, file, null, options);
    let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
    const dbUpdateVar = `${id}.image`;
    await firestore
      .collection("base")
      .doc("incidents")
      .update({
        [dbUpdateVar]: downloadURL
      });
  } catch (error) {
    console.log(error);
  }
};
