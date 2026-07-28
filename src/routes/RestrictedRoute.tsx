import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface RestrictedRouteProps {
  component: React.ReactElement;
  redirectTo?: string;
}

export const RestrictedRoute = ({
  component,
  redirectTo = "/profile",
}: RestrictedRouteProps) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};
