import { Box, TextField, Typography } from "@mui/material";
import CardCity from "../components/CardCity";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_cities } = city_actions;

const Cities = () => {
  const [refSearch, setSearch] = useState({ city: "" });
  const cities = useSelector((store) => store.cities.cities);
  const imgBackground =
    "url(https://blog.localadventures.travel/wp-content/uploads/2022/07/PORTADAS-BLOG-54.png)";

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
      <Box
        sx={{
          textAlign: "center",
          backgroundImage: imgBackground,
          backgroundSize: "cover",
          backgroundPosition: "start",
          height: "30vh",
          color: "white",
          textShadow: "black 0.1em 0.1em 0.2em"
        }}
      >
        <Typography variant="h3" sx={{ width: "100%", pt: 10 }}>
          Cities
        </Typography>
        <Typography variant="h6">
          Collection of the most beautiful places and experience
        </Typography>
      </Box>
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
