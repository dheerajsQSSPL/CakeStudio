import { Navigate } from "react-router-dom";

export default function ProtectedAdminRoute({ children }) {

    const token = localStorage.getItem("token");

    const role = localStorage.getItem("role");

    if (!token) {

        return <Navigate to="/login" replace />;

    }

    if (role !== "Admin") {

        return <Navigate to="/403" replace />;

    }

    return children;

}