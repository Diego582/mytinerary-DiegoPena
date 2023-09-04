import { Box, Typography } from "@mui/material";
import NavBar from "./NavBar";

export default function Footer() {
  const urlImg = "url(https://i.im.ge/2023/09/04/wPB2i4.footer.jpg)";
  return (
    <Box
      sx={{
        backgroundImage: urlImg,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        maxHeight: "80vh",
        filter: "brightness(80%)",
      }}
    >
      <Box
        sx={{
          m: 0,
          width: "100%",
          color: "rgba(255, 255, 255)",
          justifyContent: "center",
          alignItems: "space-between",
        }}
      >
        <Typography
          sx={{ textAlign: "center", m: 0, p: { xs: 1, sm: 3 } }}
          variant="h4"
        >
          MindHud
        </Typography>
        <Typography
          sx={{ textAlign: "center", m: 0, p: { xs: 1, sm: 3 } }}
          variant="h5"
        >
          Developer Diego Peña
        </Typography>
        <Typography
          sx={{ textAlign: "center", m: 0, p: { xs: 1, sm: 3 } }}
          variant="h6"
        >
          AP MERN 05 TM
        </Typography>
        <NavBar position="static" />
      </Box>
    </Box>
  );
}
