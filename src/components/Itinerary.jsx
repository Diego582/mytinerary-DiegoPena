import { ExpandMore } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import itinerary_actions from "../store/actions/itineraries";
const { read_itineraries_city } = itinerary_actions;

export default function Itinerary({ filter }) {
  const [expanded, setExpanded] = useState(false);

  const itineraries = useSelector((store) => store.itineraries.itinerariesCity);
  console.log(itineraries, "esto es itineraries");
  const dispatch = useDispatch();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(filter, "parametro de itineraries");
  useEffect(() => {
    dispatch(read_itineraries_city({ filter }));
  }, []);

  return (
    <>
      {!itineraries
        ? null
        : itineraries.map((iti, index) => {
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="194"
                image={iti.photo}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {iti.duration}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>;
          })}
    </>
  );
}
