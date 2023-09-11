import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Container from "@mui/material/Container";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import InfoIcon from "@mui/icons-material/Info";

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
                    backgroundColor: "#C9A226",
                    padding: 0,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: {
                        xs: "space-around",
                        md: "space-between",
                      },
                      flexWrap: "wrap",
                    }}
                  >
                    {item.length > 0 &&
                      item.map((img, index) => {
                        return (
                          <Card
                            key={index}
                            sx={{
                              width: { xs: "60vw", md: "22vw" },
                              m: 1,
                            }}
                          >
                            <CardMedia
                              component="img"
                              sx={{ height: { xs: "140px", lg: "190px" } }}
                              image={img.photo}
                              alt={img.city}
                            />
                            <CardContent
                              sx={{
                                textAlign: "center",
                                backgroundColor: "#621AD9",
                                color: "white",
                              }}
                            >
                              <Typography variant="body2" component="div">
                                {img.city}
                              </Typography>
                            </CardContent>
                          </Card>
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
