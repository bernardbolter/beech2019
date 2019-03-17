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
import homeReducer from "./components/home/homeStore/homeReducer";
import airplanesReducer from "./components/airplanes/airplanesStore/airplanesReducer";
import baseReducer from "./base/baseReducer";
import incidentsReducer from "./components/incidents/incidentsStore/incidentsReducer";
import navReducer from "./components/header/headerStore/navReducer";
import { reducer as formReducer } from "redux-form";
import modalReducer from "./features/modals/modalStore/modalReducer";
import myFormReducer from "./features/forms/formsStore/formReducer";

const firebaseConfig = {
  apiKey: "AIzaSyDbLt9jQRPWCxIop-TUaeJeDycBWcxV1NY",
  authDomain: "beech1900-fb559.firebaseapp.com",
  databaseURL: "https://beech1900-fb559.firebaseio.com",
  projectId: "beech1900-fb559",
  storageBucket: "beech1900-fb559.appspot.com",
  messagingSenderId: "483728069839"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

firebase.initializeApp(firebaseConfig);

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
  baseData: baseReducer,
  searchAirplanes: searchAirplanesReducer,
  nav: navReducer,
  home: homeReducer,
  airplanes: airplanesReducer,
  incidents: incidentsReducer,
  form: formReducer,
  myForm: myFormReducer,
  modal: modalReducer
});

const initialState = {};

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
