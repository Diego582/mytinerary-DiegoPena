import { Box } from "@mui/material";
import NavBar from "../components/NavBar";

export default function MainLayout({ children }) {
  return (
    <Box sx={{ backgroundColor: "#EBEBEB", height: "100vh" }}>
      <NavBar />
      {children}
    </Box>
  );
}
