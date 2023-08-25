import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_carousel = createAsyncThunk(
  "read_carousel", //nombre de la accion
  async () => {
    //callback que realiza la petición
    try {
      let data = await axios(apiUrl + "cities/carousel");
      console.log(data, "data de action");
      return {
        carousel: data.data.data_carousel,
      };
    } catch (error) {
      console.log(error);
      return {
        carousel: [],
      };
    }
  }
);

const city_actions = { read_carousel };
export default city_actions;
