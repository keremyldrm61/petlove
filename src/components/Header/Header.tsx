import { useLocation } from "react-router-dom";
import UserProfileBtn from "../UserProfileBtn/UserProfileBtn";
import { useAuth } from "../../hooks/useAuth";
import Logo from "./Logo/Logo";
import BurgerButton from "./BurgerButton/BurgerButton";
import LogoutHeader from "./LogoutHeader/LogoutHeader";
import NavMenu from "./NavMenu/NavMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./Header.module.css";

const Header = () => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  const isHomepage = location.pathname === "/home" || location.pathname === "/";

  return (
    <header className={css.mainHeader}>
      <div
        className={`${css.headerContainer} ${isHomepage ? css.containerHomepage : ""}`}
      >
        <Logo isHomepage={isHomepage} />

        {/* NavMenu sadece masaüstünde görünür (CSS ile yönetilir) */}
        <div className={css.desktopNavWrapper}>
          <NavMenu isHomepage={isHomepage} />
        </div>

        <div className={css.blockBtns}>
          {/* AuthNav koşullu görünümü CSS Media Query'lere devredildi */}
          {!isLoggedIn && (
            <div
              className={`${css.authNavWrapper} ${isHomepage ? css.authHomepage : ""}`}
            >
              <AuthNav setIsShowMobileMenu={() => {}} />
            </div>
          )}

          {/* LogoutHeader koşullu görünümü CSS'e devredildi */}
          {isLoggedIn && !isHomepage && (
            <div className={css.logoutNavWrapper}>
              <LogoutHeader />
            </div>
          )}

          {isLoggedIn && <UserProfileBtn isHomepage={isHomepage} />}
          <BurgerButton isHomepage={isHomepage} />
        </div>
      </div>
    </header>
  );
};

export default Header;
