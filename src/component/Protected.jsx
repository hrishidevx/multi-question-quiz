import { Navigate, Outlet } from "react-router";

function Protected() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/Login"} replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Protected;
