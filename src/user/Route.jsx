import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import Experience from "./pages/Experience";
import Home from "./pages/Home";

function Route() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />, 
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <Experience /> },
        { path: "contact", element: <Experience /> },
        { path: "protfolio", element: <Experience /> },
        { path: "blog", element: <Experience /> },
        { path: "experience", element: <Experience /> },
      ],
    },
  ]);
}

export default Route;
