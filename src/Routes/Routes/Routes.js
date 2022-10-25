import { createBrowserRouter } from "react-router-dom";
import Login from "../../Form/Login/Login";
import Register from "../../Form/Register/Register";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import PrivateRoute from "../PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <PrivateRoute><Courses></Courses></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])