import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login";

import About from "../../About";
import PrivateRoute from "../Authentication/PrivateRoute";
import Register from "../Authentication/Register";
import ErrorElement from "../Components/Error/ErrorElement";
import Home from "../Components/Home/Home";
import MainLayout from "../Components/Main/MainLayout";
import Assignment from "../Pages/Assignment";
import AssignmentDetails from "../Pages/AssignmentDetails";
import CreateAssignments from "../Pages/CreateAssignments";
import GiveMark from "../Pages/GiveMark";
import MyAttempted from "../Pages/MyAttempted";
import PendingAssignments from "../Pages/PendingAssignments";
import TakeAssignment from "../Pages/TakeAssignment";
import UpdateAssignment from "../Pages/UpdateAssignment";
import Contactus from "../Pages/Contactus";

const routes = createBrowserRouter([
  { errorElement: <ErrorElement/>,
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/assignment",
        element: <Assignment />,
      },
      {
        path: "/pendingAssignments",
        element: <PrivateRoute><PendingAssignments/></PrivateRoute>
      },
      {
        path: "/createAssignments",
        element:<PrivateRoute> <CreateAssignments /> </PrivateRoute>,
      },
      {
        path: "/myAttempted",
        element: <PrivateRoute><MyAttempted /></PrivateRoute>,
      },
      {
        path: "/updateAssignment/:id",
        element: <UpdateAssignment /> ,
      },
      {
        path: "/assignmentDetails/:id",
        element:<PrivateRoute> <AssignmentDetails /></PrivateRoute>,
      },
      {
        path: "/takeAssignment/:id",
        element: <PrivateRoute><TakeAssignment /></PrivateRoute>,
      },
      {
        path: "/giveMark/:id",
        element: <PrivateRoute><GiveMark /></PrivateRoute>,
      },
      {
        path: "/aboutUs",
        element:<About/>,
      },
      {
        path: "/contactUs",
        element:<Contactus/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
