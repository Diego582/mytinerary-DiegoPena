import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  MobileStepper,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils-react-18-fix";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = ({ images }) => {
  const [data, setData] = useState([]);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [maxSteps, setMaxSteps] = useState(0);
  const [initCount, setInitCount] = useState(true);
  console.log("pego una vuelta en carousel");
  console.log(maxSteps, "maxSteps");
  console.log(activeStep, "activeStep");
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

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
    setMaxSteps(arrayImages.length);
    setInitCount(false);
  }
  console.log(data, "data");
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
              {data[activeStep].map((step, index) => (
                <Box key={index}>
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
                </Box>
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
  );
};

export default Carousel;
