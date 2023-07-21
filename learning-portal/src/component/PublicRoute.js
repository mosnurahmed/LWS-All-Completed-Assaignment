import React from "react";
import useAuth from "../hook/useAuth";
import { Navigate } from "react-router-dom";
function PublicRoute({ children }) {
  const isLoggedIn = useAuth();
  return !isLoggedIn ? children : <Navigate to="/leaderBoard" />;
}

export default PublicRoute;
