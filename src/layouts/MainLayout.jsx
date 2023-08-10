import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <Box sx={{ backgroundColor: "#EBEBEB", minHeight: "100vh" }}>
      <NavBar />
      <Outlet />
    </Box>
  );
}

