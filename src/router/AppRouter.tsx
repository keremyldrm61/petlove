import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "../components/SharedLayout/SharedLayout";
import { RestrictedRoute } from "../routes/RestrictedRoute";
import { PrivateRoute } from "../routes/PrivateRoute";

// Ana Sayfa Bileşenleri
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const NewsPage = lazy(() => import("../pages/NewsPage/NewsPage"));
const NoticesPage = lazy(() => import("../pages/NoticesPage/NoticesPage"));
const FriendsPage = lazy(() => import("../pages/FriendsPage/FriendsPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage/ProfilePage"));
const AddPetPage = lazy(() => import("../pages/AddPetPage/AddPetPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

// Profil İçi Alt Bileşenler
const Favorites = lazy(
  () => import("../components/Profile/Favorites/Favorites"),
);
const Viewed = lazy(() => import("../components/Profile/Viewed/Viewed"));

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* Herkese Açık (Public) Rotalar */}
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="friends" element={<FriendsPage />} />

        {/* Sadece Yetkisiz (Giriş Yapmamış) Kullanıcılar İçin Rotalar */}
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/profile"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/profile" component={<LoginPage />} />
          }
        />

        {/* Sadece Yetkili (Giriş Yapmış) Kullanıcılar İçin Rotalar */}
        <Route
          path="profile"
          element={
            <PrivateRoute redirectTo="/login" component={<ProfilePage />} />
          }
        >
          {/* Profil Alt Rotaları (Nested Routes) */}
          <Route index element={<Favorites />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="viewed" element={<Viewed />} />
        </Route>

        <Route
          path="add-pet"
          element={
            <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
          }
        />

        {/* Tanımsız URL Yönetimi */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
