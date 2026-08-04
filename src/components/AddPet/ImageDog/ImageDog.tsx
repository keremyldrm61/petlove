import dogMobile from "../../../assets/images/addPet/add-pet-dog-mobile.webp";
import dogTablet from "../../../assets/images/addPet/add-pet-dog-tablet.webp";
import dogDesktop from "../../../assets/images/addPet/add-pet-dog-desktop.webp";
import { Icon } from "../../../shared/Icon";
import css from "./ImageDog.module.css";

const ImageDog = () => {
  return (
    <div>
      <div className={css.imageBox}>
        <picture className={css.picture}>
          <source
            media="(min-width: 1280px)"
            srcSet={`${dogDesktop}`}
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${dogTablet}`}
            type="image/webp"
          />
          <source
            media="(max-width: 767.98px)"
            srcSet={`${dogMobile}`}
            type="image/webp"
          />
          <img
            src={dogMobile}
            alt="One cute dog"
            loading="lazy"
            className={css.dogImage}
          />
        </picture>

        <Icon
          id="icon-shape"
          width={332}
          className={`${css.svgBase} ${css.svgMobileTablet}`}
        />

        <Icon
          id="icon-shape-pc"
          width={332}
          className={`${css.svgBase} ${css.svgDesktop}`}
        />
      </div>
    </div>
  );
};

export default ImageDog;
