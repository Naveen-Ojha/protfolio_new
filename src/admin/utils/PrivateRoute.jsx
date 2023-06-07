import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useContext(AdminContext);
    return <>{!user ? <Navigate to="/admin/login" /> : children}</>;
};

export default PrivateRoute;