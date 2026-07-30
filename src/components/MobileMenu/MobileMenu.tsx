import { useAuth } from "../../hooks/useAuth";
import Modal from "../Modal/Modal";
import NavMenuMobile from "./NavMenuMobile/NavMenuMobile";
import AuthNav from "../AuthNav/AuthNav";
import LogoutHeader from "../Header/LogoutHeader/LogoutHeader";
import { Icon } from "../../shared/Icon";
import css from "./MobileMenu.module.css";

interface Props {
  setIsShowMobileMenu: (val: boolean) => void;
  isHomepage: boolean;
}

const MobileMenu = ({ setIsShowMobileMenu, isHomepage }: Props) => {
  const { isLoggedIn } = useAuth();

  return (
    <Modal setIsShowMobileMenu={setIsShowMobileMenu}>
      <div className={css.mobileMenuContainer}>
        <button
          type="button"
          className={css.closeBtn}
          onClick={() => setIsShowMobileMenu(false)}
        >
          <Icon
            id="icon-close"
            className={isHomepage ? css.iconHomepage : css.iconDefault}
            width={32}
            height={32}
          />
        </button>
        <NavMenuMobile
          isHomepage={isHomepage}
          setIsShowMobileMenu={setIsShowMobileMenu}
        />
        {/* Koşullu Render: Kullanıcı giriş yaptıysa LogoutHeader, yapmadıysa AuthNav componentini göster */}
        {isLoggedIn ? (
          <LogoutHeader />
        ) : (
          <AuthNav setIsShowMobileMenu={setIsShowMobileMenu} />
        )}
      </div>
    </Modal>
  );
};

export default MobileMenu;
