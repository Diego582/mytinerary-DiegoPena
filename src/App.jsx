import { useState } from "react";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Cities from "./pages/Cities";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const App = () => {
  return (
    /*   <MainLayout>
      <Home />
    </MainLayout> */
    <RouterProvider router={router} />
  );
};

export default App;
