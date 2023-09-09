import { useEffect, useState } from "react";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Cities from "./pages/Cities";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useDispatch } from "react-redux";

import user_actions from "./store/actions/users";
const { signin_token } = user_actions;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      dispatch(signin_token());
    }
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
