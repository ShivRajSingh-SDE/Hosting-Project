import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/AuthProvider";
export const Logout = () => {
  const { LogoutUser } = useAuth();
  useEffect(() => {
    LogoutUser();
    window.location.reload();
  }, [LogoutUser]);
  return (
    <>
      <Navigate to="/login" />
    </>
  );
};
