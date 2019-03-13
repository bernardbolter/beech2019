import * as actionTypes from "./formsTypes";

export const modifyAirplaneData = values => {
  console.log("hit action");
  console.log(values);
  return {
    type: actionTypes.MODIFY_AIRPLANE_DATA,
    value: values
  };
};
