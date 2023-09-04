import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

export default function CardCity({ images }) {
  return (
    <>
      <ImageList
        sx={{
          display: "flex",
          justifyContent: { xs: "space-around" },
          flexWrap: "wrap",
        }}
        rowHeight={175}
      >
        {images.length > 0 &&
          images.map((img, index) => {
            return (
              <ImageListItem
                key={index}
                sx={{
                  m: 1,
                  width: { xs: "60vw", sm: "30vw", md: "20vw" },
                  height: { xs: "30vh", sm: "23vh" },
                  borderRadius: "50%",
                }}
              >
                <img src={img.photo} alt={img.city} loading="lazy" />

                <ImageListItemBar
                  sx={{
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)",
                    display: "grid",
                    justifyContent: "space-between",
                  }}
                  position="top"
                  title={img.city}
                  actionIcon={
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        width: "100%",
                      }}
                    >
                      <Box sx={{ width: "100%", mb: 4 }}>
                        <IconButton sx={{ color: "rgba(255, 255, 255, 0.9)" }}>
                          <LocationOnIcon />
                          <Typography variant="subtitle2">
                            {img.country}
                          </Typography>
                        </IconButton>
                      </Box>
                      <Box sx={{ width: "100%", mb: 1, ml: 1 }}>
                        <Link to={img._id}>
                          <Button size="small" variant="contained">
                            View More
                          </Button>
                        </Link>
                      </Box>
                    </Box>
                  }
                ></ImageListItemBar>
              </ImageListItem>
            );
          })}
        {images.length == 0 && (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="200" image="/search.jpg" />
            <CardContent>
              <Typography variant="h5">
                No city matching the search was found.
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Try another city or remove the search filters.
              </Typography>
            </CardContent>
          </Card>
        )}
      </ImageList>
    </>
  );
}
