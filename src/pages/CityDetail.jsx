import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import city_actions from "../store/actions/cities";
import CardCityDetail from "../components/CardCityDetail";
import Features from "../components/Features";
import Itinerary from "./Itinerary";
const { read_city } = city_actions;

const CityDetail = () => {
  const params = useParams();
  const city = useSelector((store) => store.cities.city);
  const dispatch = useDispatch();
  const [showItineraries, setShowItineraries] = useState(false);
  const urlImg = "url(" + city.photo + ")";
  const handleShowItineraries = () => {
    setShowItineraries(!showItineraries);
  };

  useEffect(() => {
    dispatch(read_city({ id: params.id }));
  }, []);

  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          pt: 10,
          backgroundImage: urlImg,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          minHeight: "60vh",
        }}
      >
        <CardCityDetail
          city={city}
          handleShowItineraries={handleShowItineraries}
          show={showItineraries}
        />
      </Box>
      <Itinerary filter={params} show={showItineraries} />
      <Features city={city} />
    </Box>
  );
};

export default CityDetail;
