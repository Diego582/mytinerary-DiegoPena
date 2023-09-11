import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function CardActivities({ data, filter }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: { xs: "wrap", sm: "nowrap" },
        gap: 3,
      }}
    >
      {data
        .filter((activity) => activity.itinerary_id == filter)
        .map((item, index) => {
          return (
            <Card key={index} sx={{ width: { xs: "80%", sm: "30%" } }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="130"
                  image={item.photo}
                  alt={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="body2" component="div">
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
    </Box>
  );
}
