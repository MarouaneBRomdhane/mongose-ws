import { GETUSER } from "./Actiontype";

const initialState = { users: [] };

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETUSER:
      return { ...state, users: payload.all_users };

    default:
      return state;
  }
};
