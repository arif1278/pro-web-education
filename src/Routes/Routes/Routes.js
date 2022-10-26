import { createBrowserRouter } from "react-router-dom";

import CourseDetails from "../../component/CourseDetails/CourseDetails";
import Login from "../../Form/Login/Login";
import Register from "../../Form/Register/Register";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home";
import LeftSideNav from "../../Pages/Shared/LeftSideNav";
import RightSide from "../../Pages/Shared/RightSide";
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
                path: '/courses',
                element: <RightSide></RightSide>

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: "/faq",
                element: <Faq></Faq>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:id',
                element: <LeftSideNav></LeftSideNav>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params}`)
            },
            {
                path: '/course',
                element: <RightSide></RightSide>,
                loader: () => fetch(`http://localhost:5000/course`)
            },
            {
                path: '/courseDetails/:id',
                element: <CourseDetails></CourseDetails>
            }
        ]
    }
])