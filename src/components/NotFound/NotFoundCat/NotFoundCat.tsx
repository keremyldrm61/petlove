import { Icon } from "../../../shared/Icon";
import catMobileImg from "../../../assets/images/notFoundPage/cat-404-mobile.webp";
import catTabletImg from "../../../assets/images/notFoundPage/cat-404-tablet.webp";
import catDesktopImg from "../../../assets/images/notFoundPage/cat-404-desktop.webp";
import css from "./NotFoundCat.module.css";

const NotFoundCat = () => {
  return (
    <div className={css.containerContent}>
      <div className={css.iconBox}>
        <Icon id="icon-four" />
      </div>

      <div className={css.catImgBox}>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={catDesktopImg}
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet={catTabletImg}
            type="image/webp"
          />
          <source
            media="(max-width: 767.98px)"
            srcSet={catMobileImg}
            type="image/webp"
          />
          <img src={catMobileImg} alt="One cute cat" />
        </picture>
      </div>

      <div className={css.iconBox}>
        <Icon id="icon-four" />
      </div>
    </div>
  );
};

export default NotFoundCat;
