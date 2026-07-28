import { useEffect, useState } from "react";
import loaderMobileImg from "../../assets/images/loader-mobile.webp";
import loaderTabletAndDesktopImg from "../../assets/images/loader-tablet-and-desktop.webp";
import css from "./Loader.module.css";

const Loader = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css.container}>
      <picture>
        <source media="(min-width: 768px)" srcSet={loaderTabletAndDesktopImg} />
        <img
          src={loaderMobileImg}
          alt="Loading progress..."
          className={css.image}
        />
      </picture>
      <span className={css.percentage}>{progress}%</span>
    </div>
  );
};

export default Loader;
