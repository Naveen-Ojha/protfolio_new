import { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiEndPoint } from "../../enviroment";

const AdminContext = createContext()

export { AdminContext }


const AdminProvider = ({ children }) => {
    const [tokens, setTokens] = useState(() =>
        localStorage.getItem("admin-auth")
            ? JSON.parse(localStorage.getItem("admin-auth"))
            : null
    );
    const [user, setUser] = useState(() =>
        localStorage.getItem("admin-auth")
            ? jwtDecode(localStorage.getItem("admin-auth"))
            : null
    );
    const [error, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingbutton, setLoadingButton] = useState(false);

    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        setLoadingButton(true);
        const config = {
            method: "post",
            url: `${apiEndPoint}auth/admin/signin`,
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                email: e.target.email.value,
                password: e.target.password.value
            },
        }

        axios(config)
            .then((response) => {
                setTokens(response.data);
                setUser(jwtDecode(response.data.access));
                localStorage.setItem("admin-auth", JSON.stringify(response.data));
                setLoadingButton(false);
                navigate("/admin/dashboard");
            })
            .catch((error) => {
                setErrors(error.response.data);
                setLoadingButton(false);
            });
    };

    const logoutUser = () => {
        setTokens(null);
        setUser(null);
        localStorage.removeItem("admin-auth");
        navigate("/admin/login");
    };

    const updateToken = () => {
        const config = {
            method: "post",
            url: `${apiEndPoint}auth/admin/refreshtoken`,
            headers: {
                "Content-Type": "application/json",
            },
            data: { refreshToken: tokens?.refresh },
        };

        axios(config)
            .then((response) => {
                setTokens(response.data);
                setUser(jwtDecode(response.data.access));
                localStorage.setItem("admin-auth", JSON.stringify(response.data));
            })
            .catch((error) => {
                logoutUser();
            });

        if (loading) {
            setLoading(false);
        }
    };


    const contextData = {
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
        error: error,
        loadingbutton: loadingbutton,
        tokens: tokens
    };

    const twentynine = 24 * 60 * 30;

    useEffect(() => {
        if (loading) {
            updateToken();
        }

        const interval = setInterval(() => {
            if (tokens) {
                updateToken();
            }
        }, twentynine);
        return () => clearInterval(interval);
    }, [tokens, loading]);

    return (
        <AdminContext.Provider value={contextData}>
            {loading ? null : children}
        </AdminContext.Provider>
    );
};

export default AdminProvider;