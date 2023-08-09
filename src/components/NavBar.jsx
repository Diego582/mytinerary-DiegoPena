import {
  AppBar,
  Box,
  Button,
  ImageListItem,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ButNav from "./ButNav";
import MenuNav from "./MenuNav";
import { useState } from "react";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <AppBar
        position="static"
        color="transparent"
        sx={{ width: "75vw", boxShadow: "none", pt: 2 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ImageListItem sx={{ width: "20vw" }}>
            <img src="./logo.png" alt="Logo" loading="lazy" />
          </ImageListItem>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <MenuNav handleClick={handleClick} />
          </Box>
          <Box sx={{ m: 1, p: 1, display: { xs: "none", sm: "block" } }}>
            <ButNav variant="text" icon="" color="black" text="Home" />
            <ButNav variant="text" icon="" color="black" text="Cities" />
            <ButNav
              variant="contained"
              icon={<PersonIcon />}
              color=""
              text="Login"
            />
          </Box>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>
              <ButNav variant="text" icon="" color="black" text="Home" />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ButNav variant="text" icon="" color="black" text="Cities" />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ButNav
                variant="contained"
                icon={<PersonIcon />}
                color=""
                text="Login"
              />
            </MenuItem>
          </Menu>
        </Box>
      </AppBar>
    </Box>
  );
}
