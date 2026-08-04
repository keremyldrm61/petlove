import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { refreshUser } from "./redux/auth/authOperations";
import { AppRouter } from "./router/AppRouter";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useAppDispatch();

  // Uygulama ilk açıldığında oturumu doğrula
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <AppRouter />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
