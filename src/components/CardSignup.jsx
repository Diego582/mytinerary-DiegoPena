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
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InfoIcon from "@mui/icons-material/Info";
import { useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
const { signup } = user_actions;

export default function CardSignup({ countries }) {
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [newUser, setNewUser] = useState({});
  const handleStep = () => {
    setStep(1);
  };
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSend = (newUser) => {
    dispatch(signup({ newUser }));
    navigate("/signin");
  };

 
  return (
    <Card sx={{ width: { xs: "80vw", md: "40vw" }, minHeight: "75vh" }}>
      {step == 0 ? (
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "75%",
            gap: 2,
          }}
        >
          <Typography variant="body2">step 1 of 2</Typography>
          <Typography variant="h5" sx={{ color: "#D9B218" }}>
            Create account
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Avatar
              alt="Google"
              src="https://static.vecteezy.com/system/resources/previews/010/353/285/non_2x/colourful-google-logo-on-white-background-free-vector.jpg"
            />
            <Avatar
              alt="Facebook"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
            />
          </Box>
          <Divider />
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Typography variant="subtitle2">
              Sign up with email Already have an account?
            </Typography>
            <Link to="/signin">
              <Typography variant="subtitle2"> Sign in</Typography>
            </Link>
          </Box>

          <TextField
            name="mail"
            id="standard-password-input"
            label="Email"
            type="email"
            variant="standard"
            color="secondarySignup"
            onChange={handleChange}
          />
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
              color="secondarySignup"
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
              onClick={handleStep}
              color="secondarySignup"
              sx={{ width: { xs: "100%", md: "25%" }, color: "white" }}
              variant="contained"
            >
              Continue
            </Button>
          </Box>
        </CardContent>
      ) : (
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "85%",
            gap: 1,
          }}
        >
          <Typography variant="body2">step 2 of 2</Typography>
          <Typography variant="h5" sx={{ color: "#D9B218" }}>
            Create account
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Typography variant="body2">Already have an account?</Typography>
            <Link to="/signin">
              <Typography variant="subtitle2">Sign in</Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <TextField
              sx={{ width: { xs: "100%", sm: "45%" } }}
              type="text"
              label="First Name"
              variant="standard"
              name="name"
              onChange={handleChange}
            />
            <TextField
              sx={{ width: { xs: "100%", sm: "45%" } }}
              type="text"
              label="Last Name"
              variant="standard"
              name="lastName"
              onChange={handleChange}
            />
          </Box>

          <TextField
            type="text"
            label="Photo"
            variant="standard"
            name="photo"
            onChange={handleChange}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <TextField
              select
              name="country"
              onChange={handleChange}
              label="Country/Region"
              variant="standard"
              defaultValue="Select an option"
              sx={{ width: { xs: "100%", sm: "45%" } }}
            >
              {countries &&
                countries.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </TextField>

            <FormControlLabel
              sx={{ width: { xs: "100%", sm: "45%" } }}
              control={<Checkbox />}
              label="Please contact me via email"
            />
          </Box>
          <Typography variant="caption">
            By clicking Create account, I agree that I have read and accepted
            the Terms of Use and Privacy Policy.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              onClick={() => {
                handleSend(newUser);
              }}
              color="primary"
              sx={{ width: { xs: "100%", md: "25%" } }}
              variant="contained"
            >
              Continue
            </Button>
          </Box>
        </CardContent>
      )}
    </Card>
  );
}
