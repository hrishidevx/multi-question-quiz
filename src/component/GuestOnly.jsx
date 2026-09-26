import { Navigate, Outlet } from "react-router";

function GuestOnly() {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/Quiz" replace />;
  }

  return <Outlet />;
}

export default GuestOnly;
