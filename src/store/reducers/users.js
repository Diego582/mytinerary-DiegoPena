import { createReducer } from "@reduxjs/toolkit";
import users_action from "../actions/users";

const { signin, signin_token, signout, signup } = users_action;

const initial_state = {
  token: "",
  user: {},
  newUser: {},
};

const user_reducer = createReducer(initial_state, (build) =>
  build
    .addCase(signin.fulfilled, (state, action) => {
      let new_state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
      return new_state;
    })
    .addCase(signin_token.fulfilled, (state, action) => {
      let new_state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
      return new_state;
    })
    .addCase(signout.fulfilled, (state, action) => {
      let new_state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
      return new_state;
    })
    .addCase(signup.fulfilled, (state, action) => {
      let new_state = {
        ...state,
        newUser: action.payload.newUser,
      };
      return new_state;
    })
);

export default user_reducer;
