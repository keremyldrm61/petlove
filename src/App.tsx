import { useEffect, useState } from "react";
import { useAppDispatch } from "./redux/hooks";
import { useAuth } from "./hooks/useAuth";
import { refreshUser } from "./redux/auth/authOperations";
import { AppRouter } from "./router/AppRouter";
import { Toaster } from "react-hot-toast";
import FallbackLoader from "./components/UI/FallbackLoader/FallbackLoader";

function App() {
  const dispatch = useAppDispatch();
  const { isRefreshing } = useAuth();

  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  // Uygulama ilk açıldığında oturumu doğrula
  useEffect(() => {
    dispatch(refreshUser()).finally(() => {
      setIsFirstLoad(false);
    });
  }, [dispatch]);

  if (isFirstLoad || isRefreshing) {
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
