import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

interface RestrictedRouteProps {
  component: React.ReactElement;
  redirectTo?: string;
}

// Sadece yetkisiz kullanıcıların görebileceği sayfalar içindir.
// Örn: Giriş yapmış biri /login sayfasına gitmeye çalışırsa onu /profile sayfasına yönlendirir.
export const RestrictedRoute = ({
  component: Component,
  redirectTo = "/profile",
}: RestrictedRouteProps) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : Component;
};
