import { Box, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function MainLayoutBackground() {
  return (
    <Box className="Main-Layout">
      <NavBar />
      <Outlet />
      <Footer />
    </Box>
  );
}
