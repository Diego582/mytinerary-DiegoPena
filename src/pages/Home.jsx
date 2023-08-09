import { Box, Typography, Button } from "@mui/material";
import Carousel from "../components/Carousel";
import NavLayout from "../layouts/NavLayout";

let data = [
  { id: "america1", city: "Cancun", photo: "/img/america/cancun.jpg" },
  { id: "america2", city: "New York", photo: "/img/america/newyork.jpg" },
  {
    id: "america3",
    city: "Rio de Janeiro",
    photo: "/img/america/rioDeJaneiro.jpg",
  },
  { id: "america4", city: "Ushuaia", photo: "/img/america/ushuaia.jpg" },
  { id: "asia1", city: "Bangkok", photo: "/img/asia/bangkok.jpg" },
  { id: "asia2", city: "Pekin", photo: "/img/asia/pekin.jpg" },
  { id: "asia3", city: "Singapur", photo: "/img/asia/singapur.jpg" },
  { id: "asia4", city: "Tokyo", photo: "/img/asia/tokio.jpg" },
  { id: "europe1", city: "Ibiza", photo: "/img/europe/ibiza.jpg" },
  { id: "europe2", city: "London", photo: "/img/europe/london.jpg" },
  { id: "europe3", city: "Paris", photo: "/img/europe/paris.jpg" },
  { id: "europe4", city: "Roma", photo: "/img/europe/roma.jpg" },
  { id: "oceania1", city: "Majuro", photo: "/img/oceania/majuro.jpg" },
  { id: "oceania2", city: "Sidney", photo: "/img/oceania/sidney.jpg" },
  { id: "oceania3", city: "Suva", photo: "/img/oceania/suva.jpg" },
  { id: "oceania4", city: "Wellington", photo: "/img/oceania/wellington.jpg" },
];

const Home = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", width: "80vw", mt: 3 }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "40%",
          p: 3,
          alignContent: "space-between",
        }}
      >
        <Typography variant="h4" color="initial" sx={{ textAlign: "center" }}>
          Find the perfect destination
        </Typography>
        <Typography variant="h6" color="initial" sx={{ textAlign: "justify" }}>
          Our app will help you find the perfect path for your next trip. With
          an easy-to-use interface and a host of itinerary options, planning
          your next trip has never been easier.
        </Typography>
        <Button variant="contained">View More</Button>
      </Box>
      <Box sx={{ width: "40%", p: 3 }}>
        <Carousel images={data} />
      </Box>
    </Box>
  );
};

export default Home;
