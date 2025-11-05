import { createBrowserRouter } from "react-router-dom";
import About from "../components/about/About.jsx";
import Userlgin from "../components/Userlogin/Userlgin.jsx";
import Userresister from "../components/Userresister/Userregister.jsx";
import Adminlogin from "../components/adminlogin/Adminlogin.jsx";
import Home from "../components/Home.jsx";
import Vdashboard from "../components/voter-dashboard/vdashboard.jsx";
import App from "../App.jsx";
import LearnMore from "../components/learnmore/learnmore.jsx";
import AdminDashboard from "../components/AdminDashboard/AdminDashboard.jsx";

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
      { path: "/dashboard", element: <Vdashboard /> },
      { path: "/learnmore", element: <LearnMore /> },
      { path: "/admindashboard", element: <AdminDashboard /> },
    ],
  },
]);

export default router;
