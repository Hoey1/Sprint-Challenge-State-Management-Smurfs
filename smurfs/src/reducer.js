import { SUBMIT_SMURF } from "./actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  isPosting: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_VILLAGE":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_VILLAGE_SUCCESS":
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
      };

    case "POST_SMURF":
      return {
        ...state,
        isPosting: true,
      };
    default:
      return state;
  }
};
