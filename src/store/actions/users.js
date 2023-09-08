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
      };
    } catch (error) {
      return {
        user: {},
        token: "",
      };
    }
  }
);

const city_actions = { signin };
export default city_actions;
