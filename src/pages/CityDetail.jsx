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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ width: "75vw", m: 2 }}>
          <CardMedia
            component="img"
            sx={{ height: "50vh" }}
            src={city.photo}
            title={city.city}
          />
          <CardContent>
            <Typography variant="subtitle1" color="initial">
              {city.city}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Link to="/cities">
              <Button variant="text">return</Button>
            </Link>
          </CardActions>
          <Typography variant="h6" color="initial">
            Under construction
          </Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default CityDetail;
