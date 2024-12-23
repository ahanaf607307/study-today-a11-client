import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login";

import PrivateRoute from "../Authentication/PrivateRoute";
import Register from "../Authentication/Register";
import Home from "../Components/Home/Home";
import MainLayout from "../Components/Main/MainLayout";
import Assignment from "../Pages/Assignment";
import CreateAssignments from "../Pages/CreateAssignments";
import MyAttempted from "../Pages/MyAttempted";
import PendingAssignments from "../Pages/PendingAssignments";
import UpdateAssignment from "../Pages/UpdateAssignment";

const routes = createBrowserRouter([
  {
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
        element: <CreateAssignments />,
      },
      {
        path: "/myAttempted",
        element: <MyAttempted />,
      },
      {
        path: "/updateAssignment/:id",
        element: <UpdateAssignment />,
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
