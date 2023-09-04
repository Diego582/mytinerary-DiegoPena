import { Box, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PriceChangeIcon from "@mui/icons-material/PriceChange";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#85bb65",
  },
  "& .MuiRating-iconHover": {
    color: "#85bb65",
  },
});

export default function Price({ value }) {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      {value <= 5 ? (
        <StyledRating
          name="customized-color"
          value={value}
          precision={0.5}
          icon={<LocalAtmIcon />}
          emptyIcon={<LocalAtmIcon fontSize="inherit" />}
          readOnly
        />
      ) : (
        <StyledRating
          name="customized-color"
          value={value / 10}
          precision={0.5}
          icon={<PriceChangeIcon />}
          emptyIcon={<PriceChangeIcon fontSize="inherit" />}
          readOnly
        />
      )}
    </Box>
  );
}
