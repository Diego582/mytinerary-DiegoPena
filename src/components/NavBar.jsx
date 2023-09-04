import { AppBar, Box, ImageListItem, Menu, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ButNav from "./ButNav";
import MenuNav from "./MenuNav";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({ position }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <AppBar
        position={position}
        color="transparent"
        sx={{ width: "95vw", boxShadow: "none" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ImageListItem sx={{ width: { xs: "70vw", sm: "20vw" } }}>
            <img
              src="https://i.im.ge/2023/09/04/wPBUVr.logo.png"
              alt="Logo"
              loading="lazy"
            />
          </ImageListItem>
          <Box
            sx={{ display: { xs: "block", sm: "none" }, p: { xs: 2, sm: 1 } }}
          >
            <MenuNav handleClick={handleClick} />
          </Box>
          <Box sx={{ m: 1, p: 1, display: { xs: "none", sm: "block" }, textShadow: "black 0.1em 0.1em 0.2em" }}>
            <Link to="/">
              <ButNav variant="contained" icon="" color="white" text="Home" />
            </Link>
            <Link to="/cities">
              <ButNav variant="contained" icon="" color="white" text="Cities" />
            </Link>
            <Link to="/signin">
              <ButNav
                variant="contained"
                icon={<PersonIcon />}
                color=""
                text="Login"
              />
            </Link>
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
            <Link to="/">
              <MenuItem onClick={handleClose}>
                <ButNav variant="text" icon="" color="black" text="Home" />
              </MenuItem>
            </Link>
            <Link to="/cities">
              <MenuItem onClick={handleClose}>
                <ButNav variant="text" icon="" color="black" text="Cities" />
              </MenuItem>
            </Link>
            <Link to="/signin">
              <MenuItem onClick={handleClose}>
                <ButNav
                  variant="contained"
                  icon={<PersonIcon />}
                  color=""
                  text="Login"
                />
              </MenuItem>
            </Link>
          </Menu>
        </Box>
      </AppBar>
    </Box>
  );
}
