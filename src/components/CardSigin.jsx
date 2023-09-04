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
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function CardSigin() {
  return (
    <Card sx={{ width: { xs: "80vw", md: "40vw" }, height: "75vh" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "75%",
        }}
      >
        <Typography variant="body2">step 1 of 2</Typography>
        <Typography variant="h3">Sign in</Typography>
        <Typography variant="subtitle2">New user?</Typography>
        <Typography variant="subtitle2">Create an account</Typography>
        <TextField
          id="standard-password-input"
          label="Email"
          type="email"
          variant="standard"
        />
        <Button variant="contained">Continue</Button>
        <Divider />
        <Button startIcon={<GoogleIcon />} variant="contained">
          Continue with Google
        </Button>
        <Button startIcon={<FacebookIcon />} variant="contained">
          Continue with facebook
        </Button>
      </CardContent>
    </Card>
  );
}
