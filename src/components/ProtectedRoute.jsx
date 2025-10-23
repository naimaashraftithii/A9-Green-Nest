import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) return <div className="min-h-[40vh] grid place-items-center text-green-500">Loading…</div>;
  if (!user) return <Navigate to="/login" replace state={location.pathname} />;
  return children;
};

export default ProtectedRoute;
