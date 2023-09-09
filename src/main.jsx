import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store/store";

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
    primarySignup: {
      main: "#72733B",
    },
    secondarySignup: {
      main: "#D9B218",
    },
    error: {
      main: "#F04835",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
