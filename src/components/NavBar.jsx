import {
  AppBar,
  Avatar,
  Box,
  Button,
  ImageListItem,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import ButNav from "./ButNav";
import MenuNav from "./MenuNav";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import user_actions from "../store/actions/users";
const { signout } = user_actions;

export default function NavBar({ position }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const user = useSelector((store) => store.users.user);
  const dispatch = useDispatch();
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
          </Box>
          <Box
            sx={{ display: { xs: "block", sm: "none" }, p: { xs: 2, sm: 1 } }}
          >
            <MenuNav handleClick={handleClick} />
          </Box>
          <Box
            sx={{
              m: 1,
              p: 1,
              display: { xs: "none", sm: "flex" },
              textShadow: "black 0.1em 0.1em 0.2em",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <ButNav variant="contained" icon="" color="white" text="Home" />
            </Link>
            <Link to="/cities">
              <ButNav variant="contained" icon="" color="white" text="Cities" />
            </Link>

            {user.name ? (
              <Button
                onClick={() => {
                  dispatch(signout());
                }}
                variant="contained"
                startIcon={<LogoutIcon />}
                sx={{ m: 1, p: 1, pr: 2, pl: 2 }}
              >
                Sign out
              </Button>
            ) : (
              <Link to="/signin">
                <ButNav
                  variant="contained"
                  icon={<PersonIcon />}
                  color=""
                  text={user.name ? user.name : "Login"}
                />
              </Link>
            )}
            {user.name && (
              <Tooltip title={user.name}>
                <Avatar src={user.photo} />
              </Tooltip>
            )}
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
            <MenuItem
              onClick={handleClose}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link to="/">
                <ButNav variant="text" icon="" color="black" text="Home" />
              </Link>
            </MenuItem>

            <MenuItem
              onClick={handleClose}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link to="/cities">
                <ButNav variant="text" icon="" color="black" text="Cities" />
              </Link>
            </MenuItem>

            {user.name ? (
              <MenuItem
                onClick={handleClose}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={() => {
                    dispatch(signout());
                  }}
                  variant="contained"
                  startIcon={<LogoutIcon />}
                  sx={{ m: 1, p: 1, pr: 2, pl: 2 }}
                >
                  Sign out
                </Button>
              </MenuItem>
            ) : (
              <MenuItem
                onClick={handleClose}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link to="/signin">
                  <ButNav
                    variant="contained"
                    icon={<PersonIcon />}
                    color=""
                    text={user.name ? user.name : "Login"}
                  />
                </Link>
              </MenuItem>
            )}
            {user.name && (
              <MenuItem
                onClick={handleClose}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Tooltip title={user.name}>
                  <Avatar src={user.photo} />
                </Tooltip>
              </MenuItem>
            )}
          </Menu>
        </Box>
      </AppBar>
    </Box>
  );
}
