import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected: React.FC = () => {
  const user = true;
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Protected;
