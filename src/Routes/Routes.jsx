import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";

import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Clasess/Classes";
import Dashboard from "../Layout/Dashboard";
import AddClasses from "../pages/Dashboard/Instructors/AddClasses";
import MyClasses from "../pages/Dashboard/Instructors/MyClasses";
import SelectedClass from "../pages/Dashboard/Students/SelectedClass";

import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import UpdateClass from "../pages/Dashboard/Instructors/UpdateClass";
import Payment from "../pages/Dashboard/Payments/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import EnrollClasses from "../pages/Dashboard/Students/EnrollClasses/EnrollClasses";
import FeedBack from "../pages/Dashboard/Admin/ManageClasses/FeedBack";
import FeedBackInstructor from "../pages/Dashboard/Instructors/FeedBackInstructor";
import InstructorsClasses from "../pages/Instructors/InstructorsClasses";
import PaymentHistory from "../pages/Dashboard/Students/PaymentHistory/PaymentHistory";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import InstructorHome from "../pages/Dashboard/Instructors/instructorHome/instructorHome";
import StudentHome from "../pages/Dashboard/Students/StudentHome/StudentHome";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'instructorsClasses',
                element: <InstructorsClasses></InstructorsClasses>
            },
        ]
    },

    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "adminHome",
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: "manageClasses",
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },

            {
                path: "manageUsers",
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: "feedBack/:id",
                element: <FeedBack></FeedBack>,
                loader: ({ params }) => fetch(`https://music-shool-server.vercel.app/allClasses/${params.id}`)
            },
            {
                path: "allUsers",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "instructorHome",
                element: <InstructorHome></InstructorHome>
            },
            {
                path: "addClass",
                element: <AddClasses></AddClasses>
            },
            {
                path: "feedBackInstructor",
                element: <FeedBackInstructor></FeedBackInstructor>
            },
            {
                path: "updateClass/:id",
                element: <UpdateClass></UpdateClass>,
                loader: ({ params }) => fetch(`https://music-shool-server.vercel.app/allClasses/${params.id}`)
            },

            {
                path: "studentHome",
                element: <StudentHome></StudentHome>
            },
            {
                path: "myClasses",
                element: <MyClasses></MyClasses>
            },
            {
                path: "selectedClass",
                element: <SelectedClass></SelectedClass>
            },
            {
                path: "enrollClass",
                element: <EnrollClasses></EnrollClasses>
            },
            {
                path: "payment/:id",
                element: <Payment></Payment>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },

        ]
    }
]);

export default router;