import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import NavBar from "./NavBar";

export default function Footer() {
  return (
    <ImageList
      sx={{
        width: "100%",
        m: 0,
        display: "flex",
        justifyContent: { xs: "space-around" },
        flexWrap: "wrap",
      }}
    >
      <ImageListItem sx={{ objectFit: "cover" }}>
        <img src="./footer.jpg" loading="lazy" />

        <ImageListItemBar
          sx={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
              "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
            display: "grid",
            alignItems: "space-between",
            height: "100%",
          }}
          position="bottom"
          actionIcon={
            <Box
              sx={{
                m: 0,
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  m: 0,
                  width: "100%",
                  color: "rgba(255, 255, 255, 0.54)",
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
                <NavBar />
              </Box>
            </Box>
          }
        ></ImageListItemBar>
      </ImageListItem>
    </ImageList>
  );
}
