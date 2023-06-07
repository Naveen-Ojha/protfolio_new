import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import BlogHome from "./pages/blog/BlogHome";
import BlogDetails from "./pages/blog/BlogDetails";

function Route() {
  return useRoutes([
    {
      path: "/blog",
      element: <Layout />,
      children: [
        { path: "", element: <BlogHome /> },
        { path: "category/:id", element: <BlogHome /> },
        { path: ":id", element: <BlogDetails /> },
      ],
    },
  ]);
}

export default Route;
