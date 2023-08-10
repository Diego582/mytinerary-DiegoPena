import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Cities from "./pages/Cities";
import SignIn from "./pages/SignIn";

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
]);

export default router;
