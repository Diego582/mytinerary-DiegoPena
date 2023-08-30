import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function CardFeatures({ title, text, img }) {
  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia component="img" height="175" image={img} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {text}: {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
