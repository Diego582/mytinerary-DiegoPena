import { createReducer } from "@reduxjs/toolkit";
import users_action from "../actions/users";

const { signin } = users_action;

const initial_state = {
  token: "",
  user: {},
};

const user_reducer = createReducer(initial_state, (build) =>
  build.addCase(signin.fulfilled, (state, action) => {
    let new_state = {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
    };
    return new_state;
  })
);

export default user_reducer;