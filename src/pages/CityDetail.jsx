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

const CityDetail = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const params = useParams();
  console.log(params, "esto es params");

  useEffect(() => {
    axios(apiUrl + "cities/" + params.id)
      .then((res) => setData(res.data.response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ width: "75vw", m: 2 }}>
          <CardMedia
            component="img"
            sx={{ height: "50vh" }}
            src={data.photo}
            title={data.city}
          />
          <CardContent>
            <Typography variant="subtitle1" color="initial">
              {data.city}
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
