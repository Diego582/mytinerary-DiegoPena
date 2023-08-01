import { AppBar, Box, Button, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function NavBar() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <AppBar position="static" color="transparent" sx={{ width: "75vw" }}>
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
            <Button variant="text" sx={{ color: "black" }}>
              Home
            </Button>
            <Button variant="text" sx={{ color: "black" }}>
              Cities
            </Button>
            <Button variant="contained" startIcon={<PersonIcon />}>
              Login
            </Button>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
