import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <Box className="Main-Layout">
      <NavBar position="absolute" />
      <Outlet />
      <Footer />
    </Box>
  );
}
