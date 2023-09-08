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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import itinerary_actions from "../store/actions/itineraries";
import Price from "./Price";
import NotItinerary from "./NotItinerary";
const { read_itineraries_city } = itinerary_actions;

export default function Itinerary({ filter, show }) {
  const [expanded, setExpanded] = useState(false);
  const [count, setCount] = useState(0);

  const itineraries = useSelector((store) => store.itineraries.itinerariesCity);
  const dispatch = useDispatch();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleCountFavorite = () => {
    setCount(count + 1);
  };

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
                        {iti.duration / 60} Hs.
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
                    <IconButton onClick={handleExpandClick}>
                      {expanded === true ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>under construction</Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              );
            })
          ) : (
            <NotItinerary />
          )}
        </Box>
      ) : null}
    </>
  );
}
