import { combineReducers } from "redux";
import homeReducer from "./homeReducer.js";
import newsletterReducer from "./newsletterReducer.js";
import navReducer from "./navReducer";

export default combineReducers({
  home: homeReducer,
  newsletter: newsletterReducer,
  nav: navReducer
});
