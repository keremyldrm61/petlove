import { Suspense, useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { fetchSpecies } from "../../redux/notices/noticesOperations";

import Header from "../Header/Header";
import MainScreen from "../MainScreen/MainScreen";
import FallbackLoader from "../UI/FallbackLoader/FallbackLoader";

const SharedLayout = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [showFirstScreen, setShowFirstScreen] = useState<boolean>(
    location?.pathname === "/",
  );

  useEffect(() => {
    dispatch(fetchSpecies());

    const timerId = setTimeout(() => {
      setShowFirstScreen(false);
    }, 6000);

    return () => clearTimeout(timerId);
  }, [dispatch]);

  return (
    <>
      <Header />
      {showFirstScreen && <MainScreen />}
      <main>
        <Suspense fallback={<FallbackLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
