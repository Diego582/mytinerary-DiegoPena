import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import NotItinerary from "./NotItinerary";
import Price from "./Price";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Activities from "../pages/Activities";
import { useState } from "react";
import activity_actions from "../store/actions/activities";
import { useDispatch, useSelector } from "react-redux";

const { read_activities_itinerary } = activity_actions;

export default function CardItineraries() {
  const [expanded, setExpanded] = useState(false);
  const [count, setCount] = useState(0);
  const itineraries = useSelector((store) => store.itineraries.itinerariesCity);
  const dispatch = useDispatch();
  const handleCountFavorite = () => {
    setCount(count + 1);
  };

  const handleExpandClick = (itinerary) => {
    setExpanded(!expanded);
    dispatch(read_activities_itinerary({ itinerary: itinerary._id }));
  };
  return (
    <>
      {itineraries.length > 0 ? (
        itineraries.map((iti, index) => {
          return (
            <Card key={index} sx={{ width: { xs: "80vw", md: "60vw" } }}>
              <CardMedia
                component="img"
                height="250"
                image={iti.photo}
                alt={iti.name}
                sx={{}}
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "80vw", sm: "20vw" },
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography variant="h5" sx={{ width: "100%" }}>
                    User:
                  </Typography>
                  <Avatar
                    alt={iti.city_id.admin_id.name}
                    src={iti.city_id.admin_id.photo}
                  />
                  <Typography variant="h6" sx={{ width: "100%" }}>
                    {iti.city_id.admin_id.name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: { xs: "80vw", sm: "20vw" },
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography variant="h5" sx={{ width: "100%" }}>
                    Hashtags:
                  </Typography>
                  <Typography variant="h6" sx={{ width: "100%" }}>
                    {iti.tags.map((tag, index) => {
                      return (
                        <Button key={index} variant="text">
                          {tag}
                        </Button>
                      );
                    })}
                  </Typography>
                </Box>
                <Box sx={{ width: { xs: "80vw", sm: "20vw" } }}>
                  <Typography variant="h5" sx={{ width: "100%" }}>
                    Duration:
                  </Typography>
                  <Typography variant="h6" sx={{ width: "100%" }}>
                    {(iti.duration / 60).toFixed(0)} Hs.
                  </Typography>
                </Box>
                <Box sx={{ width: { xs: "80vw", sm: "20vw" } }}>
                  <Typography variant="h5" sx={{ width: "100%" }}>
                    Price:
                  </Typography>
                  <Price value={iti.price / 10} />
                </Box>
              </CardContent>
              <CardActions
                disableSpacing
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <IconButton
                  aria-label="add to favorites"
                  onClick={handleCountFavorite}
                >
                  <Badge badgeContent={count} color="primary">
                    <FavoriteIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleExpandClick(iti);
                  }}
                >
                  {expanded === true ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Activities />
                </CardContent>
              </Collapse>
            </Card>
          );
        })
      ) : (
        <NotItinerary />
      )}
    </>
  );
}
