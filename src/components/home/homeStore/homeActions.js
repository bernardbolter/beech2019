import * as actionTypes from "./homeTypes";

export const filterHomeData = data => {
  console.log(data);
  console.log("action");
  return {
    type: actionTypes.FILTER_HOME_DATA,
    data
  };
};
