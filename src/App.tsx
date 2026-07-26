import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { AppRouter } from "./router/AppRouter";
import { Toaster } from "react-hot-toast";
import { refreshUser } from "./redux/auth/authOperations";

function App() {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector((state) => state.auth.isRefreshing);

  // Uygulama yüklendiğinde kullanıcı oturumunu kontrol et
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // Token kontrol edilirken beyaz ekran yerine Loader göster
  if (isRefreshing) {
    return (
      <div>Oturum kontrol ediliyor... (Buraya Loader componenti gelecek)</div>
    );
  }

  return (
    <>
      <AppRouter />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
