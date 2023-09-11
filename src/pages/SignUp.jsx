import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardSignup from "../components/CardSignup";
import city_actions from "../store/actions/cities";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SignUp = () => {
  const user = useSelector((store) => store.users.user);

  const urlBackground =
    "url(https://scontent.foes1-1.fna.fbcdn.net/v/t39.30808-6/243048581_4582426245146848_8755206009666846923_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=52f669&_nc_ohc=NIQg6NGR6TQAX-JKGUd&_nc_ht=scontent.foes1-1.fna&oh=00_AfDOXUfKyP6ExybTQHQVL0Qw64gx3svItYdID-sZE_YXcA&oe=64FC2A87)";

  const countries = [
    {
      value: "Africa",
      label: "Africa",
    },
    {
      value: "Australia",
      label: "Australia",
    },
    {
      value: "Argentina",
      label: "Argentina",
    },
    {
      value: "Brasil",
      label: "Brasil",
    },
    {
      value: "Egypt",
      label: "Egypt",
    },
    {
      value: "Chile",
      label: "Chile",
    },
    {
      value: "Cambodia",
      label: "Cambodia",
    },
    {
      value: "Indonesia",
      label: "Indonesia",
    },
    {
      value: "Japan",
      label: "Japan",
    },
    {
      value: "Maldives Republic",
      label: "Maldives Republic",
    },
    {
      value: "Mexico",
      label: "Mexico",
    },
    {
      value: "Tahiti",
      label: "Tahiti",
    },
    {
      value: "Venezuela",
      label: "Venezuela",
    },
    {
      value: "Select an option",
      label: "Select an option",
    },
  ];

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
              sx={{ m: 2, textAlign: "center", color: "#FFCD00" }}
            >
              My Tinerary
            </Typography>
            <CardSignup countries={countries} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default SignUp;
