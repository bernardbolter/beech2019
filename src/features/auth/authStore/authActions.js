import { closeModal } from "../../modals/modalStore/modalActions";
import { LOGIN_MESSAGE } from "./authTypes";

export const login = creds => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
      dispatch(loginMessage("You are Logged In"));
    } catch (error) {
      dispatch(loginMessage(error.message));
    }
  };
};

export const logout = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.logout();
      dispatch(closeModal());
    } catch (error) {
      dispatch(loginMessage(error.message));
    }
  };
};

const loginMessage = message => {
  return {
    type: LOGIN_MESSAGE,
    message: message
  };
};
