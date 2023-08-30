import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function CardCityDetail({ city }) {
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
            width: { xs: "80vw", md: "50vw" },
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
            <Typography variant="h2" sx={{ m: 2 }}>
              {city.city}
            </Typography>
            <Typography variant="subtitle1">{city.description}</Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              endIcon={<KeyboardDoubleArrowDownIcon />}
              variant="contained"
            >
              View Itineraries
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
