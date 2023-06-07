import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./auth/Login";
import DashboardLayout from "./layout/dashboard";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from './utils/PrivateRoute'
import Blog from "./pages/Blog";
import AddBlog from "./pages/AddBlog";
import UpdateBlog from "./pages/UpdateBlog";
import AddCategory from "./pages/AddCategory";
import UpdateCategory from "./pages/UpdateCategory";
import BlogCategory from "./pages/BlogCategory";

function AdminRoutes() {
    return useRoutes([
        {
            path: "admin",
            element: <DashboardLayout />,
            redirct: 'dashboard',
            children: [
                { path: "dashboard", element: <PrivateRoute> <Dashboard /> </PrivateRoute> },
                { path: "blog", element: <PrivateRoute> <Blog /> </PrivateRoute> },
                { path: "add-blog", element: <PrivateRoute> <AddBlog /> </PrivateRoute> },
                { path: "blog/:id", element: <PrivateRoute> <UpdateBlog /> </PrivateRoute> },
                { path: "blog-category", element: <PrivateRoute> <BlogCategory /> </PrivateRoute> },
                { path: "add-blog-category", element: <PrivateRoute> <AddCategory /> </PrivateRoute> },
                { path: "blog-category/:id", element: <PrivateRoute> <UpdateCategory /> </PrivateRoute> },
            ],
        },
        {
            path: "admin",
            children: [
                { path: "login", element: <Login /> },
            ]
        }
    ]);
}

export default AdminRoutes;
