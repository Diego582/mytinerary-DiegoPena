import { Box, Typography, Button } from "@mui/material";
import Carousel from "../components/Carousel";
import NavLayout from "../layouts/NavLayout";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("/cities.json")
      .then(res => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: { md: "80vw" },
        mt: 3,
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: { xs: "80%", sm: "40%" },
          p: 3,
          alignContent: "space-between",
        }}
      >
        <Typography variant="h4" color="initial" sx={{ textAlign: "center" }}>
          Find the perfect destination
        </Typography>
        <Typography variant="h6" color="initial" sx={{ textAlign: "justify" }}>
          Our app will help you find the perfect path for your next trip. With
          an easy-to-use interface and a host of itinerary options, planning
          your next trip has never been easier.
        </Typography>
        <Button variant="contained">View More</Button>
      </Box>
      <Box sx={{ width: { xs: "80%", sm: "40%" }, p: 3 }}>
        <Carousel images={data} />
      </Box>
    </Box>
  );
};

export default Home;
