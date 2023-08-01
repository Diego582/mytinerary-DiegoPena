import {
  Box,
  Card,
  CardActions,
  CardMedia,
  Grid,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import Container from "@mui/material/Container";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Carousel = ({ images }) => {
  const [imagenes] = useState(images);
  const [position, setPosition] = useState(0);
  const cantidad = imagenes?.length;

  const handleNextPosition = () => {
    setPosition(position === cantidad - 1 ? 0 : position + 1);
  };

  const handleBeforePosition = () => {
    setPosition(position === 0 ? cantidad - 1 : position - 1);
  };
  return (
    <Container disableGutters sx={{ margin: 0, padding: 0, width: "75vw" }}>
      {imagenes &&
        imagenes.map((item, index) => {
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
                      backgroundColor: "#3c343c",
                      padding: 0,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.photo}
                      alt={item.city}
                      sx={{
                        objectFit: "contain",
                      }}
                    />
                    <CardActions
                      sx={{
                        display: "flex",
                        flexGrow: 0.5,
                        justifyContent: "space-between",
                      }}
                    >
                      <IconButton
                        color="secondary"
                        onClick={handleBeforePosition}
                      >
                        <ArrowCircleLeftIcon />
                      </IconButton>
                      <IconButton
                        color="secondary"
                        onClick={handleNextPosition}
                      >
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
