import {
  Card,
  Typography,
  CardMedia,
  CardActionArea,
  CardContent,
} from "@mui/material";
import React from "react";

export default function NotItinerary() {
  return (
    <Card sx={{}}>
      <CardActionArea>
        <CardMedia
          component="img"
          title="Not Itineraries"
          image="http://imgfz.com/i/0TL6bFG.png"
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="h4" color="initial">
          There are no itineraries
        </Typography>
      </CardContent>
    </Card>
  );
}
