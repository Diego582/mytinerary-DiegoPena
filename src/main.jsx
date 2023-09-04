import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#621AD9",
    },
    secondary: {
      main: "#F029AA",
    },
    tertiary: {
      main: "#F08641",
    },
    fourth: {
      main: "#fffff",
    },
    colorsCards: {
      main: "#3EF029",
    },
    error: {
      main: "#F04835",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
