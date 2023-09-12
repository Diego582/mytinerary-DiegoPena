import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const signin = createAsyncThunk(
  "signin", //nombre de la accion
  async (obj) => {
    //callback que realiza la petición
    try {
      let data = await axios.post(apiUrl + "auth/signin", obj.data);
      localStorage.setItem("token", data.data.response.token);
      return {
        user: data.data.response.user,
        token: data.data.response.token,
        messages: [],
      };
    } catch (error) {
      return {
        user: {},
        token: "",
        messages: error.response.data.messages || [error.response.data.message],
      };
    }
  }
);

const signin_token = createAsyncThunk("signin_token", async () => {
  try {
    let token = localStorage.getItem("token");
    let authorization = { headers: { Authorization: `Bearer ${token}` } };
    let data = await axios.post(apiUrl + "auth/token", null, authorization);

    localStorage.setItem("token", data.data.response.token);
    return {
      user: data.data.response.user,
      token: data.data.response.token,
    };
  } catch (error) {
    return {
      user: {},
      token: "",
    };
  }
});

const signout = createAsyncThunk("signout", async () => {
  try {
    let token = localStorage.getItem("token");
    let authorization = { headers: { Authorization: `Bearer ${token}` } };
    let data = await axios.post(apiUrl + "auth/signout", null, authorization);
    localStorage.removeItem("token");
    return {
      user: {},
      token: "",
    };
  } catch (error) {
    return {
      user: {},
      token: "",
    };
  }
});

const signup = createAsyncThunk("signup", async (obj) => {
  try {
    let data = await axios.post(apiUrl + "auth/signup", obj.newUser);
    return {
      newUser: data.data.response,
      messages: [],
    };
  } catch (error) {
    return {
      newUser: {},
      messages: error.response.data.messages || [error.response.data.message],
    };
  }
});

const user_actions = { signin, signin_token, signout, signup };
export default user_actions;
