import { Box, Typography } from "@mui/material";
import CardFeatures from "./CardFeatures";

export default function Features({ city }) {
  return (
    <Box
      sx={{
        m: 3,
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: 3,
      }}
    >
      <Typography variant="h3" color="initial" sx={{ width: "100%", m: 2 }}>
        Features
      </Typography>

      <CardFeatures
        text="Country"
        title={city.country}
        img="https://alanxelmundo.com/wp-content/uploads/2020/10/globo2810.jpg"
      />
      <CardFeatures
        text="Featured Location"
        title={city.featuredLocation}
        img="https://www.ambitojuridico.com/sites/default/files/celular-personas-mapafreepik.jpg"
      />
      <CardFeatures
        text="Population"
        title={city.population}
        img="https://us.123rf.com/450wm/saskekun/saskekun2306/saskekun230600547/206617314-grupo-de-personas-alrededor-del-planeta-tierra-multitud-de-personas-de-pie-tohether-comunicacion.jpg?ver=6"
      />
    </Box>
  );
}
