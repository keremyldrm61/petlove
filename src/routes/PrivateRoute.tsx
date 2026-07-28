import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface PrivateRouteProps {
  component: React.ReactElement;
  redirectTo?: string;
}

export const PrivateRoute = ({
  component,
  redirectTo = "/login",
}: PrivateRouteProps) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} replace /> : component;
};
