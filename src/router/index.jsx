import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Layout from "../Layout";
import Register from "../Pages/Register/Register";

const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <Register />,
        path: "/register",
      },
      {
        element: <Register />,
        path: "/detaildestination/:id",
      },
    ],
  },
]);

export default routers;
