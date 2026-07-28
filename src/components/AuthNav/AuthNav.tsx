import { Link } from "react-router-dom";
import css from "./AuthNav.module.css";

interface Props {
  setIsShowMobileMenu?: (val: boolean) => void;
}

const AuthNav = ({ setIsShowMobileMenu }: Props) => {
  const handleClick = () => setIsShowMobileMenu && setIsShowMobileMenu(false);

  return (
    <div className={css.buttonsContainer}>
      <Link to="/login" className={css.loginBtn} onClick={handleClick}>
        Log In
      </Link>
      <Link to="/register" className={css.registerBtn} onClick={handleClick}>
        Registration
      </Link>
    </div>
  );
};

export default AuthNav;
