import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/About.jsx";
import Userlgin from "./components/Userlogin/Userlgin.jsx";
import Userresister from "./components/Userresister/Userregister.jsx";
import Adminlogin from "./components/adminlogin/Adminlogin.jsx";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/user/login", element: <Userlgin /> },
      { path: "/user/register", element: <Userresister /> },
      { path: "/admin/login", element: <Adminlogin /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
