import { useState, useEffect } from "react";
import { Icon } from "../../shared/Icon";
import Loader from "../Loader/Loader";
import css from "./MainScreen.module.css";

const MainScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const showLoaderTimer = setTimeout(() => {
      setIsLoading(true);

      const hideLoaderTimer = setTimeout(() => {
        setIsLoading(false);
      }, 3300);

      return () => clearTimeout(hideLoaderTimer);
    }, 2000);

    return () => clearTimeout(showLoaderTimer);
  }, []);

  return (
    <>
      <div className={css.container}>
        {isLoading ? (
          <Loader />
        ) : (
          <Icon
            id="icon-logo-main"
            className={css.logo}
            width={109}
            height={32}
          />
        )}
      </div>
    </>
  );
};

export default MainScreen;
