import { LoginMessage } from "../../../utils/constants";
import Message from "../../Message/Message";
import DogImgMobile from "../../../assets/images/loginPage/dog-login-mobile.webp";
import DogImgTablet from "../../../assets/images/loginPage/dog-login-tablet.webp";
import DogImgDesktop from "../../../assets/images/loginPage/dog-login-desktop.webp";
import { Icon } from "../../../shared/Icon";
import css from "../../../styles/shared/AuthImage.module.css";

const LoginImage = () => {
  const { imgUrl, name, birthday, comment } = LoginMessage;

  return (
    <div className={css.authImageContainer}>
      <picture className={css.pictureWrapper}>
        <source
          media="(min-width: 1280px)"
          srcSet={`${DogImgDesktop}`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${DogImgTablet}`}
          type="image/webp"
        />
        <source
          media="(max-width: 767.98px)"
          srcSet={`${DogImgMobile}`}
          type="image/webp"
        />
        <img
          className={css.heroImage}
          src={DogImgMobile}
          alt="One cute dog"
          loading="lazy"
        />
      </picture>

      {/* Mobil ve Tablet için arka plan şekli */}
      <div className={css.bgSvgMobileTablet}>
        <Icon id="icon-shape" width={332} />
      </div>

      {/* Sadece Masaüstü için arka plan şekli */}
      <div className={css.bgSvgDesktop}>
        <Icon id="icon-shape-pc" width={332} />
      </div>

      {/* Mesaj kutusunun mobilde gizlenmesi CSS ile yönetilecek */}
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

export default LoginImage;
