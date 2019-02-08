import { TOGGLE_NEWSLETTER } from "../actions/types";

const initialState = { openNewsletter: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NEWSLETTER:
      return {
        ...state,
        openNewsletter: !state.openNewsletter
      };
    default:
      return state;
  }
}
