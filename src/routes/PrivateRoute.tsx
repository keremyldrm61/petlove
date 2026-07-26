import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

interface PrivateRouteProps {
  component: React.ReactElement;
  redirectTo?: string;
}

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/login",
}: PrivateRouteProps) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const isRefreshing = useAppSelector((state) => state.auth.isRefreshing);

  // Kullanıcı giriş yapmamışsa ve token yenilenmiyorsa yönlendir
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} replace /> : Component;
};
