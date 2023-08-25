import { useState } from "react";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Cities from "./pages/Cities";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
