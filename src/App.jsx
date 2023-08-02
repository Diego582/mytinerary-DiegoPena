import { useState } from "react";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Cities from "./pages/Cities";

const App = () => {
  return (
    <MainLayout>
      {/* <Home /> */}
      <Cities />
    </MainLayout>
  );
};

export default App;
