import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Link } from "react-router-dom";

export default function CardCityDetail({ city, handleShowItineraries, show }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            width: { xs: "90vw", md: "70vw" },
            m: 2,
            backgroundColor: "transparent",
            boxShadow: "none",
            color: "white",
          }}
        >
          <CardContent sx={{ backgroundColor: "transparent" }}>
            <Typography
              variant="h2"
              sx={{ m: 2, textShadow: "black 0.1em 0.1em 0.2em" }}
            >
              {city.city}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ textShadow: "black 0.1em 0.1em 0.2em" }}
            >
              {city.description}
            </Typography>
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Box sx={{ width: "100%", m: 1 }}>
              {show === true ? (
                <Link to="/cities">
                  <Button
                    endIcon={<KeyboardReturnIcon />}
                    variant="contained"
                    color="secondary"
                  >
                    return
                  </Button>
                </Link>
              ) : (
                <Link to="/cities">
                  <Button endIcon={<KeyboardReturnIcon />} variant="contained">
                    return
                  </Button>
                </Link>
              )}
            </Box>
            <Box sx={{ width: "100%", m: 1 }}>
              {show === true ? (
                <Button
                  endIcon={<KeyboardDoubleArrowUpIcon />}
                  variant="contained"
                  onClick={handleShowItineraries}
                  color="secondary"
                >
                  Hide Itineraries
                </Button>
              ) : (
                <Button
                  endIcon={<KeyboardDoubleArrowDownIcon />}
                  variant="contained"
                  onClick={handleShowItineraries}
                >
                  View Itineraries
                </Button>
              )}
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
