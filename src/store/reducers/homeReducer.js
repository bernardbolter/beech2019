import { GET_AIRPLANES } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_AIRPLANES:
      return {
        ...state
      };
    default:
      return state;
  }
}
