import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardSigin from "../components/CardSigin";

const SignIn = () => {
  const urlBackground =
    "url(https://www.encuentra-tu-arquitecto.com/media/cache/remote_news_head/uploads/newsPicture/775909044908312087-La-experiencia-sensorial-en-la-arquitectura-60fe72f17804c.jpeg)";

  return (
    <Box
      sx={{
        backgroundImage: urlBackground,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 15,
        }}
      >
        <Typography
          variant="h3"
          color="secondary"
          sx={{ m: 2, textAlign: "center" }}
        >
          My Tinerary
        </Typography>
        <CardSigin />
      </Box>
    </Box>
  );
};

export default SignIn;
