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
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function CardCity({ images }) {
  return (
    <>
      <Typography variant="h3" color="initial" sx={{ m: 2 }}>
        Esto es City
      </Typography>
      <ImageList
        sx={{
          display: "flex",
          justifyContent: { xs: "space-around" },
          flexWrap: "wrap",
        }}
      >
        {images.length > 0 &&
          images.map((img, index) => {
            return (
              <ImageListItem
                sx={{
                  m: 1,
                  width: { xs: "60vw", sm: "23vw" },
                  height: { xs: "30vh", sm: "23vh" },
                  borderRadius: "50%",
                }}
              >
                <img
                  src={img.photo}
                  srcSet={`${img.city}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={img.city}
                  loading="lazy"
                />
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                  }}
                  position="top"
                  title={img.city}
                  actionIcon={
                    <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }}>
                      <LocationOnIcon />
                    </IconButton>
                  }
                >
                  <Button variant="contained">View More</Button>
                </ImageListItemBar>
              </ImageListItem>
            );
          })}

        {/*    {images.length > 0 &&
          images.map((img, index) => {
            return (
              <ImageListItem sx={{ m: 1, width: { xs: "60vw", sm: "20vw" } }}>
                <img
                  src={img.photo}
                  srcSet={img.photo}
                  alt={img.city}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={img.city}
                  sx={{ textAlign: "center" }}
                />
              </ImageListItem>
            );
          })} */}
      </ImageList>
    </>
  );
}
