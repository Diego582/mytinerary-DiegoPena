import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import itinerary_actions from "../store/actions/itineraries";

import CardItineraries from "../components/CardItineraries";

const { read_itineraries_city } = itinerary_actions;

export default function Itinerary({ filter, show }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(read_itineraries_city({ filter }));
  }, []);

  return (
    <>
      {show === true ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            m: 3,
            gap: 3,
          }}
        >
          <Typography variant="h3" sx={{ width: "80vw" }}>
            Itineraries
          </Typography>
          <CardItineraries />
        </Box>
      ) : null}
    </>
  );
}
