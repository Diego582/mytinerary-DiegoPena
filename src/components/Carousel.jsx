import {
  Box,
  Card,
  CardActions,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  Typography,
  MobileStepper,
  Button,
} from "@mui/material";
import { useState } from "react";
import Container from "@mui/material/Container";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils-react-18-fix";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = ({ images }) => {
  /* const [position, setPosition] = useState(0);
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
  } */
  const [data, setData] = useState([]);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [maxSteps, setMaxSteps] = useState(0);
  const [initCount, setInitCount] = useState(true);
  console.log(data, "data");
  console.log(maxSteps, "maxSteps");
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  console.log(images);

  if (initCount && images && images.length > 8) {
    let count = 0;
    let itemsImages = [];
    let arrayImages = [];
    for (const image of images) {
      itemsImages.push(image);
      count++;
      if (count == 4) {
        arrayImages.push(itemsImages);
        itemsImages = [];
        count = 0;
      }
    }
    setData(arrayImages);
    setInitCount(false);
  }
  return (
    <>
      {maxSteps > 0 && (
        <Box sx={{ width: "50vw" }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            <ImageList
              sx={{
                display: "flex",
                justifyContent: { xs: "space-around" },
                flexWrap: "wrap",
              }}
              rowHeight={140}
            >
              {data.map((img, index) => (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2
                    ? img.map((step, index) => {
                        return (
                          <ImageListItem
                            key={index}
                            sx={{ m: 1, width: { xs: "60vw", sm: "20vw" } }}
                          >
                            <img
                              src={step.photo}
                              srcSet={step.photo}
                              alt={step.city}
                              loading="lazy"
                            />
                            <ImageListItemBar
                              title={step.city}
                              sx={{ textAlign: "center" }}
                            />
                          </ImageListItem>
                        );
                      })
                    : null}
                </div>
              ))}
            </ImageList>
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      )}
    </>

    /*   <Container disableGutters sx={{ width: { md: "50vw" } }}>
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
                    rowHeight={140}
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
    </Container> */
  );
};

export default Carousel;
