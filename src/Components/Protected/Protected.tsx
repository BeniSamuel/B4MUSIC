import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected: React.FC = () => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    return <Navigate to="/" />;
  }
  
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Protected;
