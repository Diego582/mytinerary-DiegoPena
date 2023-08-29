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
const { read_city } = city_actions;

const CityDetail = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const params = useParams();
  const city = useSelector((store) => store.cities.city);
  const dispatch = useDispatch();

  console.log(params, "esto es params");
  console.log(city, "esto es city");

  useEffect(() => {
    dispatch(read_city({ id: params.id }));
  }, []);

  return (
    <Box sx={{ textAlign: "center" }}>
      <CardCityDetail city={city} />
    </Box>
  );
};

export default CityDetail;
