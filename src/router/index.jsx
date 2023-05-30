import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Layout from "../Layout";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";

const routers = createBrowserRouter([
  {
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    path: "/",
  },
  {
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
    path: "/login",
  },
  {
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
    path: "/register",
  },
  {
    element: (
      <Layout>
        <Blogs />
      </Layout>
    ),
    path: "/blogs/:id",
  },
]);

export default routers;
