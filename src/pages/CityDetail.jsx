import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

import { useEffect, useState } from "react";
import axios from "axios";

import apiUrl from "../apiUrl";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import city_actions from "../store/actions/cities";

import CardCityDetail from "../components/CardCityDetail";
import Features from "../components/Features";
import Itinerary from "../components/Itinerary";
const { read_city } = city_actions;

const CityDetail = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const params = useParams();
  const city = useSelector((store) => store.cities.city);
  const dispatch = useDispatch();

  console.log(params, "esto es params");
  console.log(city, "esto es city");
  console.log(city.photo, "esto es city photo");

  useEffect(() => {
    dispatch(read_city({ id: params.id }));
  }, []);
  const urlImg = "url(" + city.photo + ")";
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          backgroundImage: urlImg,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <CardCityDetail city={city} />
      </Box>
      <Itinerary filter={params} />
      <Features city={city} />
    </Box>
  );
};

export default CityDetail;
