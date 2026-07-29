import { RegistrationMessage } from "../../../utils/constants";
import Message from "../../Message/Message";
import CatImgMobile from "../../../assets/images/registrationPage/cat-register-mobile.webp";
import CatImgTablet from "../../../assets/images/registrationPage/cat-register-tablet.webp";
import CatImgDesktop from "../../../assets/images/registrationPage/cat-register-desktop.webp";
import { Icon } from "../../../shared/Icon";
import css from "../../../styles/shared/AuthImage.module.css";

const RegistrationImage = () => {
  const { imgUrl, name, birthday, comment } = RegistrationMessage;

  return (
    <div className={css.authImageContainer}>
      <picture className={css.pictureWrapper}>
        <source
          media="(min-width: 1280px)"
          srcSet={`${CatImgDesktop}`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${CatImgTablet}`}
          type="image/webp"
        />
        <source
          media="(max-width: 767.98px)"
          srcSet={`${CatImgMobile}`}
          type="image/webp"
        />
        <img
          className={css.heroImage}
          src={CatImgMobile}
          alt="Orange color Cat"
          loading="lazy"
        />
      </picture>

      {/* Mobil ve Tablet için arka plan şekli */}
      <div className={css.bgSvgMobileTablet}>
        <Icon id="icon-shape" width={332} height={332} />
      </div>

      {/* Sadece Masaüstü için arka plan şekli */}
      <div className={css.bgSvgDesktop}>
        <Icon id="icon-shape-pc" width={332} height={332} />
      </div>

      {/* Mesaj kutusunun görünürlüğü tamamen CSS ile yönetilecek */}
      <div className={css.messageWrapper}>
        <Message
          imgUrl={imgUrl}
          name={name}
          birthday={birthday}
          comment={comment}
        />
      </div>
    </div>
  );
};

export default RegistrationImage;
