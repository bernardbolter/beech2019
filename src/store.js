import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase/app";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

import headerReducer from "./components/header/headerStore/headerReducer";
import homeReducer from "./components/home/homeStore/homeReducer";
import airplanesReducer from "./components/airplanes/airplanesStore/airplanesReducer";
import baseReducer from "./base/baseReducer";

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
  header: headerReducer,
  home: homeReducer,
  airplanes: airplanesReducer
});

const initialState = {};

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
