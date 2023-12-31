import { Box, Typography, Button } from "@mui/material";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_carousel } = city_actions;

const Home = () => {
  const [data, setData] = useState([]);
  const carousel = useSelector((store) => store.cities.carousel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(read_carousel());
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: { md: "80vw" },
        mt: 15,
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: { xs: "80%", sm: "43%" },
          p: 3,
          alignContent: "space-between",
        }}
      >
        <Typography
          variant="h3"
          color="initial"
          sx={{
            textAlign: "center",
            textShadow: "black 0.1em 0.1em 0.2em",
            color: "white",
          }}
        >
          Find the perfect destination
        </Typography>
        <Typography variant="h6" color="initial" sx={{ textAlign: "justify" }}>
          Our app will help you find the perfect path for your next trip. With
          an easy-to-use interface and a host of itinerary options, planning
          your next trip has never been easier.
        </Typography>
        <Link to="/cities">
          <Button variant="contained">View More</Button>
        </Link>
      </Box>
      <Box sx={{ width: { xs: "80%", sm: "45%" }, p: 3 }}>
        <Carousel images={carousel} />
      </Box>
    </Box>
  );
};

export default Home;
