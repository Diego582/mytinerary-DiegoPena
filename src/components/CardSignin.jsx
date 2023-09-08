import {
  Card,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  TextField,
  Divider,
  Button,
  Box,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import users_actions from "../store/actions/users";
const { signin } = users_actions;

export default function CardSigin() {
  const [step, setStep] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleStep = () => {
    setStep(1);
  };
  const [data, setData] = useState({
    mail: "",
    password: "",
  });
  const user = useSelector((store) => console.log(store));
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSignin = () => {
    dispatch(signin({ data }));
  };

  console.log(data, "esto es data");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  console.log(username, "username");
  console.log(password, "password");
  return (
    <Card sx={{ width: { xs: "80vw", md: "40vw" }, height: "75vh" }}>
      {step == 0 ? (
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "75%",
            gap: 2,
          }}
        >
          <Typography variant="body2">step 1 of 2</Typography>
          <Typography variant="h4" color="secondary">
            Sign in
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Typography variant="subtitle2">New user?</Typography>
            <Link to="/signup">
              <Typography variant="subtitle2">Create an account</Typography>
            </Link>
          </Box>
          <TextField
            name="mail"
            id="standard-password-input"
            label="Email"
            type="email"
            variant="standard"
            color="secondary"
            onChange={handleChange}
          />
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              onClick={handleStep}
              color="secondary"
              sx={{ width: { xs: "100%", md: "25%" } }}
              variant="contained"
            >
              Continue
            </Button>
          </Box>
          <Divider />
          <Button
            color="fourth"
            dark
            startIcon={
              <Avatar
                alt="Google"
                src="https://static.vecteezy.com/system/resources/previews/010/353/285/non_2x/colourful-google-logo-on-white-background-free-vector.jpg"
              />
            }
            variant="contained"
          >
            Continue with Google
          </Button>
          <Button startIcon={<FacebookIcon />} variant="contained">
            Continue with facebook
          </Button>
        </CardContent>
      ) : (
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "75%",
            gap: 2,
          }}
        >
          <Typography variant="body2">step 2 of 2</Typography>
          <Typography variant="h4" color="secondary">
            Enter your password
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Avatar />
            <Box>
              <Typography color="secondary" variant="body2">
                {username}
              </Typography>
              <Typography variant="body2">Personal Account</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <TextField
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              onChange={handleChange}
              label="Password"
              required
              variant="standard"
              color="secondary"
              sx={{ width: "100%" }}
            />

            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              onClick={handleSignin}
              color="secondary"
              sx={{ width: { xs: "100%", md: "25%" } }}
              variant="contained"
            >
              Continue
            </Button>
          </Box>
          <Divider />
          <Button
            color="fourth"
            dark
            startIcon={
              <Avatar
                alt="Google"
                src="https://static.vecteezy.com/system/resources/previews/010/353/285/non_2x/colourful-google-logo-on-white-background-free-vector.jpg"
              />
            }
            variant="contained"
          >
            Continue with Google
          </Button>
          <Button startIcon={<FacebookIcon />} variant="contained">
            Continue with facebook
          </Button>
        </CardContent>
      )}
    </Card>
  );
}
