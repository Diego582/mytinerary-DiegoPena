import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Cities from "./pages/Cities";
import SignIn from "./pages/SignIn";
import CityDetail from "./pages/CityDetail";
import MainLayoutBackground from "./layouts/MainLayoutBackground";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cities", element: <Cities /> },
      { path: "/signin", element: <SignIn /> },
    ],
  },
  {
    path: "/",
    element: <MainLayoutBackground />,
    children: [{ path: "/cities/:id", element: <CityDetail /> }],
  },
]);

export default router;
