import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { useAuth } from "./hooks/useAuth";
import { refreshUser } from "./redux/auth/authOperations";
import FallbackLoader from "./components/UI/FallbackLoader/FallbackLoader";
import { AppRouter } from "./router/AppRouter";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useAppDispatch();

  // Direct Redux state okumak yerine hazırladığımız custom hook'u kullanıyoruz
  const { isRefreshing } = useAuth();

  // Uygulama ilk açıldığında oturumu doğrula
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <FallbackLoader />;
  }

  return (
    <>
      <AppRouter />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
