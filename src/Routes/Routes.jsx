import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";

import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Clasess/Classes";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";


import AddClasses from "../pages/Dashboard/Instructors/AddClasses";
import MyClasses from "../pages/Dashboard/Instructors/MyClasses";
import SelectedClass from "../pages/Dashboard/Students/SelectedClass";
import EnrollClasses from "../pages/Dashboard/Students/EnrollClasses";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";



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
        ]
    },

     {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path:"manageClasses",
                element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
           
            {
                path:"manageUsers",
                element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path:"allUsers",
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:"addClass",
                element:<AddClasses></AddClasses>
            },
           
            {
                path:"myClasses",
                element:<MyClasses></MyClasses>
            },
            {
                path:"selectedClass",
                element:<SelectedClass></SelectedClass>
            },
            {
                path:"enrollClass",
                element:<EnrollClasses></EnrollClasses>
            },
           
        ]
    }
]);

export default router;