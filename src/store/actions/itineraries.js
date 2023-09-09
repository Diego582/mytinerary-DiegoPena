import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_itineraries_city = createAsyncThunk(
  "read_itineraries", //nombre de la accion
  async (obj) => {
    //callback que realiza la petición
    try {
      let data = await axios(apiUrl + "itineraries?city_id=" + obj.filter.id);

      return {
        itinerariesCity: data.data.response,
      };
    } catch (error) {
      return {
        itinerariesCity: [],
      };
    }
  }
);

const itinerary_actions = { read_itineraries_city };
export default itinerary_actions;
