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
          {/*   <CardMedia
      component="img"
      sx={{ height: "50vh" }}
      src={city.photo}
      title={city.city}
    /> */}
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
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            {show === true ? (
              <Button
                endIcon={<KeyboardDoubleArrowUpIcon />}
                variant="contained"
                onClick={handleShowItineraries}
                color="error"
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
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
