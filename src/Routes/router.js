import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Categories from "../pages/categories/Categories";
import Course from "../pages/courses/Course";
import Courses from "../pages/courses/Courses";
import About from "../others/About";

import Blog from "../others/Blog";
import FAQ from "../others/FAQ";
import Checkout from "../shared/checkout/Checkout";

import Register from "../shared/loginregister/Register"
import Login from "../shared/loginregister/Login";
import Profile from "../shared/profile/Profile";
import ErrorPage from "../shared/errorpage/ErrorPage";
import Home from "../shared/Home";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter( [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Categories></Categories>,
        loader: ( { params } ) =>
          fetch( ` https://growhand-server-6i6az7mog-arif1278.vercel.app/category/${ params.id }` ),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch( "https://growhand-server-6i6az7mog-arif1278.vercel.app/courses" ),
      },
      {
        path: "/course/:id",
        element: (
          <PrivateRoute>
            <Course></Course>
          </PrivateRoute>
        ),
        loader: ( { params } ) =>
          fetch( ` https://server-code-space-main.vercel.app/courses/${ params.id }` ),
      },
      {
        path: "/pay-now",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile></Profile>
      </PrivateRoute>
    ),
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
    loader: () => fetch( " https://growhand-server-6i6az7mog-arif1278.vercel.app/questions" ),
  },
  {
    path: "/faq",
    element: <FAQ></FAQ>,
    loader: () => fetch( " https://growhand-server-6i6az7mog-arif1278.vercel.app/faq" ),
  },
] );

export default router;