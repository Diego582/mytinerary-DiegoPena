import {
  Avatar,
  Card,
  CardContent,
  IconButton,
  TextField,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import SendIcon from "@mui/icons-material/Send";

export default function CardComment() {
  const user = useSelector((store) => store.users.user);
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
        }}
      >
        <Avatar alt={user.name} src={user.photo} />
        <TextField
          name="comment"
          placeholder="Search your city"
          id="outlined-start-adornment"
          sx={{ p: 1, m: 1, minWidth: { xs: "80vw", sm: "50vw" } }}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SendIcon position="end" sx={{ m: 1 }} />
              </IconButton>
            ),
          }}
          variant="outlined"
        />
      </CardContent>
    </Card>
  );
}
