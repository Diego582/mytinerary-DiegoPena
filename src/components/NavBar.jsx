import { AppBar, Box, Button, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ButNav from "./ButNav";

export default function NavBar() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <AppBar
        position="static"
        color="transparent"
        sx={{ width: "75vw", boxShadow: "none" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" color="initial">
            My Tinerary
          </Typography>
          <Box sx={{ m: 1, p: 1 }}>
            <ButNav variant="text" icon="" color="black" text="Home" />
            <ButNav variant="text" icon="" color="black" text="Cities" />
            <ButNav
              variant="contained"
              icon={<PersonIcon />}
              color=""
              text="Login"
            />
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
