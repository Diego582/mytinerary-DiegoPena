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

export default function CardSigin() {
  const [step, setStep] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleStep = () => {
    setStep(1);
  };

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
            value={username}
            id="standard-password-input"
            label="Email"
            type="email"
            variant="standard"
            color="secondary"
            onChange={(event) => setUsername(event.target.value)}
          />
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              onClick={handleStep}
              color="secondary"
              sx={{ width: "25%" }}
              variant="contained"
            >
              Continue
            </Button>
          </Box>
          <Divider />
          <Button
            color="fourth"
            dark
            startIcon={<GoogleIcon />}
            variant="contained"
            sx={{ color: "#F029AA" }}
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
            <Button color="secondary" sx={{ width: "25%" }} variant="contained">
              Continue
            </Button>
          </Box>
          <Divider />
          <Button
            color="fourth"
            dark
            startIcon={<GoogleIcon />}
            variant="contained"
            sx={{ color: "#F029AA" }}
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
