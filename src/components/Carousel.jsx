import {
  Box,
  Card,
  CardActions,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { useState } from "react";
import Container from "@mui/material/Container";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Carousel = ({ images }) => {
  const [position, setPosition] = useState(0);
  const [positionTo, setPositionTo] = useState(4);

  const handleNextPosition = () => {
    setPosition(images.length <= positionTo ? 0 : position + 4);
    setPositionTo(images.length <= positionTo ? 4 : positionTo + 4);
  };

  const handleBeforePosition = () => {
    setPosition(position == 0 ? images.length - 4 : position - 4);
    setPositionTo(position == 0 ? images.length : positionTo - 4);
  };

  if (images.length > 0) {
    setTimeout(handleNextPosition, 5000);
  }

  return (
    <Container disableGutters sx={{ width: { md: "50vw" } }}>
      {images.length > 0 &&
        [images.slice(position, positionTo)].map((item, index) => {
          return (
            <Box key={index}>
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
                  <ImageList
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "space-around" },
                      flexWrap: "wrap",
                    }}
                    rowHeight={160}
                  >
                    {item.length > 0 &&
                      item.map((img, index) => {
                        return (
                          <ImageListItem
                            key={index}
                            sx={{ m: 1, width: { xs: "60vw", sm: "20vw" } }}
                          >
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
                  </ImageList>
                  <CardActions
                    sx={{
                      display: "flex",
                      flexGrow: 0.5,
                      justifyContent: "space-between",
                    }}
                  >
                    <IconButton color="primary" onClick={handleBeforePosition}>
                      <ArrowCircleLeftIcon />
                    </IconButton>
                    <IconButton color="primary" onClick={handleNextPosition}>
                      <ArrowCircleRightIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            </Box>
          );
        })}
    </Container>
  );
};

export default Carousel;
