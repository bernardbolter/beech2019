import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import {
  reactReduxFirebase,
  firebaseReducer,
  getFirebase
} from "react-redux-firebase";
import {
  reduxFirestore,
  firestoreReducer,
  getFirestore
} from "redux-firestore";

import searchAirplanesReducer from "./components/header/headerStore/searchAirplanesReducer";
import searchIncidentsReducer from "./components/header/headerStore/searchIncidentsReducer";
import homeReducer from "./components/home/homeStore/homeReducer";
import airplanesReducer from "./components/airplanes/airplanesStore/airplanesReducer";
import incidentsReducer from "./components/incidents/incidentsStore/incidentsReducer";
import navReducer from "./components/header/headerStore/navReducer";
import { reducer as formReducer } from "redux-form";
import modalReducer from "./features/modals/modalStore/modalReducer";
import myFormReducer from "./features/forms/formsStore/formReducer";
import authReducer from "./features/auth/authStore/authReducer";

import { firebaseConfig } from "./fbConfig";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

firebase.initializeApp(firebaseConfig);

firebase
  .firestore()
  .enablePersistence()
  .catch(function(err) {
    if (err.code === "failed-precondition") {
      console.log(err.code);
    } else if (err.code === "unimplemented") {
      console.log(err.code);
    }
  });

const firestore = firebase.firestore();
const settings = {};
firestore.settings(settings);

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  searchAirplanes: searchAirplanesReducer,
  searchIncidents: searchIncidentsReducer,
  nav: navReducer,
  home: homeReducer,
  airplanes: airplanesReducer,
  incidents: incidentsReducer,
  form: formReducer,
  myForm: myFormReducer,
  modal: modalReducer,
  loginState: authReducer
});

const initialState = {};

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
