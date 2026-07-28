import heroImgMobile from "../../../assets/images/homePage/home-mobile.webp";
import heroImgTablet from "../../../assets/images/homePage/home-tablet.webp";
import heroImgDesktop from "../../../assets/images/homePage/home-desktop.webp";
import css from "./HeroImage.module.css";

const HeroImage = () => {
  return (
    <div className={css.heroImgContainer}>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${heroImgDesktop}`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${heroImgTablet}`}
          type="image/webp"
        />
        <source
          media="(max-width: 767.98px)"
          srcSet={`${heroImgMobile}`}
          type="image/webp"
        />
        <img
          className={css.heroImage}
          src={heroImgMobile}
          alt="Girl which loves her dog"
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default HeroImage;
