import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase/app";
import "firebase/database";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";

import storeReducer from "./reducers/storeReducer";

const firebaseConfig = {
  apiKey: "AIzaSyDbLt9jQRPWCxIop-TUaeJeDycBWcxV1NY",
  authDomain: "beech1900-fb559.firebaseapp.com",
  databaseURL: "https://beech1900-fb559.firebaseio.com",
  projectId: "beech1900-fb559",
  storageBucket: "beech1900-fb559.appspot.com",
  messagingSenderId: "483728069839"
};

const rrfConfig = {
  userProfile: "users"
};

firebase.initializeApp(firebaseConfig);

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  store: storeReducer
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
