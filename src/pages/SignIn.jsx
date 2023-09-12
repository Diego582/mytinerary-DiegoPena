import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardSigin from "../components/CardSignin";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const urlBackground =
    "url(https://www.encuentra-tu-arquitecto.com/media/cache/remote_news_head/uploads/newsPicture/775909044908312087-La-experiencia-sensorial-en-la-arquitectura-60fe72f17804c.jpeg)";

  const user = useSelector((store) => store.users.user);
  const store = useSelector((store) => store);
  console.log(store, "store");
  return (
    <>
      {user.name ? (
        <Navigate to="/" />
      ) : (
        <Box
          sx={{
            backgroundImage: urlBackground,
            width: "100%",
            minHeight: "100vh",
            backgroundSize: "cover",
            pb: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "space-between" },
              alignItems: "center",
              flexWrap: "wrap",
              p: { xs: 0, md: 15 },
              pt: { xs: 10 },
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
      )}
    </>
  );
};

export default SignIn;
