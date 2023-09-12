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

import { useSelector } from "react-redux";

export default function CardItineraries() {
  const [expanded, setExpanded] = useState(false);
  const [count, setCount] = useState(0);
  const itineraries = useSelector((store) => store.itineraries.itinerariesCity);
  const user = useSelector((store) => store.users.user);
  const handleCountFavorite = () => {
    setCount(count + 1);
  };

  const handleExpandClick = (itinerary) => {
    let id = itinerary._id;
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id],
    }));
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
                  backgroundColor: "#F2EE9F",
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
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#F2EE9F",
                }}
              >
                {user.name ? (
                  <IconButton
                    aria-label="add to favorites"
                    onClick={handleCountFavorite}
                  >
                    <Badge badgeContent={count} color="primary" showZero>
                      <FavoriteIcon />
                    </Badge>
                  </IconButton>
                ) : (
                  <IconButton
                    disabled
                    aria-label="add to favorites"
                    onClick={handleCountFavorite}
                  >
                    <Badge badgeContent={count} color="primary" showZero>
                      <FavoriteIcon />
                    </Badge>
                  </IconButton>
                )}
                <IconButton
                  onClick={() => {
                    handleExpandClick(iti);
                  }}
                >
                  {expanded[iti._id] === true ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </IconButton>
              </CardActions>
              <Collapse in={expanded[iti._id]} timeout="auto" unmountOnExit>
                <CardContent sx={{ backgroundColor: "#F2EE9F" }}>
                  <Activities itinerary={iti._id} />
                  {/* <Comments /> */}
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
