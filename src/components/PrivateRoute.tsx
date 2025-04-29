import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Navigate } from "react-router-dom";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { keycloak } = useKeycloak();

  return keycloak.authenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;