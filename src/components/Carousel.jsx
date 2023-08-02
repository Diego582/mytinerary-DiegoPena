import {
  Box,
  Card,
  CardActions,
  Grid,
  IconButton,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { useState } from "react";
import Container from "@mui/material/Container";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Carousel = ({ images }) => {
  const [imagenes] = useState(images);
  const [position, setPosition] = useState(0);
  const cantidad = imagenes?.length / 4;

  const handleNextPosition = () => {
    setPosition(position === cantidad - 1 ? 0 : position + 1);
  };

  const handleBeforePosition = () => {
    setPosition(position === 0 ? cantidad - 1 : position - 1);
  };

  const carousel = [];
  carousel.push(imagenes.slice(0, 4));
  carousel.push(imagenes.slice(4, 8));
  carousel.push(imagenes.slice(8, 12));
  carousel.push(imagenes.slice(12, 16));
  console.log(carousel, "carousel");
  return (
    <Container disableGutters sx={{ width: "75vw" }}>
      {carousel &&
        carousel.map((item, index) => {
          console.log(item, "itemCarousel");
          return (
            <Box key={index}>
              {position === index && (
                <Grid
                  margin={0}
                  container
                  sx={{
                    display: "flex",
                    flexGrow: 0.5,
                    justifyContent: "space-between",
                  }}
                >
                  <Card
                    xs={12}
                    sx={{
                      backgroundColor: "#EBEBEB",
                      padding: 0,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 3,
                      }}
                    >
                      {item &&
                        item.map((img, index) => {
                          return (
                            <ImageListItem key={index} sx={{ width: "30vw" }}>
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
                        })}
                    </Box>
                    <CardActions
                      sx={{
                        display: "flex",
                        flexGrow: 0.5,
                        justifyContent: "space-between",
                      }}
                    >
                      <IconButton
                        color="primary"
                        onClick={handleBeforePosition}
                      >
                        <ArrowCircleLeftIcon />
                      </IconButton>
                      <IconButton color="primary" onClick={handleNextPosition}>
                        <ArrowCircleRightIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              )}
            </Box>
          );
        })}
    </Container>
  );
};

export default Carousel;
