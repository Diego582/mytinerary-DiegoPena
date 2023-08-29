import {
  Box,
  Card,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import CardCity from "../components/CardCity";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import apiUrl from "../apiUrl";
import { useDispatch, useSelector } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_cities } = city_actions;

const Cities = () => {
  const [data, setData] = useState([""]);
  const [refSearch, setSearch] = useState({ city: "" });
  const cities = useSelector((store) => store.cities.cities);
  console.log(cities, "cities");
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setSearch((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  useEffect(() => {
    dispatch(read_cities({ filtered: refSearch.city }));
  }, [refSearch]);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          name="city"
          onKeyUp={handleFilter}
          placeholder="Search your city"
          id="outlined-start-adornment"
          sx={{ p: 1, m: 1, minWidth: { xs: "80vw", sm: "50vw" } }}
          InputProps={{
            startAdornment: <SearchIcon position="start" sx={{ m: 1 }} />,
          }}
          variant="outlined"
        />
      </Box>
      <CardCity images={cities} />
    </Box>
  );
};

export default Cities;
