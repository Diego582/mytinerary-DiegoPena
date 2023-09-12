import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  MobileStepper,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils-react-18-fix";
import { useTheme } from "@mui/material/styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = ({ images }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  console.log(images, "iamges");
  console.log(activeStep, "activestep");
  return (
    <Box sx={{ width: { xs: "80vw", sm: "50vw" } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <AutoPlaySwipeableViews
          interval={5000}
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images &&
            images.length > 0 &&
            images.map((array, indexT) => {
              return (
                <Card key={indexT}>
                  {Math.abs(activeStep - indexT) <= 2 ? (
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: {
                          xs: "space-around",
                          md: "space-between",
                        },
                        flexWrap: "wrap",
                      }}
                    >
                      {array.map((step, index) => {
                        return (
                          <Box>
                            <CardMedia
                              key={index}
                              component="img"
                              sx={{
                                height: "20vh",
                                width: { xs: "70vw", sm: "42vw", md: "23vw" },
                              }}
                              src={step.photo}
                              alt={step.city}
                            />
                            <Typography
                              gutterBottom
                              variant="body2"
                              component="div"
                              sx={{ textAlign: "center" }}
                            >
                              {step.city}
                            </Typography>
                          </Box>
                        );
                      })}
                    </CardContent>
                  ) : null}
                </Card>
              );
            })}
        </AutoPlaySwipeableViews>
      </Box>
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
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
  );
};

export default Carousel;
