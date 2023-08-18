import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import CardCity from "../components/CardCity";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";

const Cities = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios("/cities.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          placeholder="Search your city"
          id="outlined-start-adornment"
          sx={{ p: 1, m: 1, minWidth: { xs: "80vw", sm: "50vw" } }}
          InputProps={{
            startAdornment: <SearchIcon position="start" sx={{ m: 1 }} />,
          }}
          variant="outlined"
        />
      </Box>
      <CardCity images={data} />
    </Box>
  );
};

export default Cities;
