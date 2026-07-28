import { useState, useEffect } from "react";
import { noScroll } from "../../../utils/helpers";
import MobileMenu from "../../MobileMenu/MobileMenu";
import { Icon } from "../../../shared/Icon";
import css from "./BurgerButton.module.css";

interface Props {
  isHomepage: boolean;
}

const BurgerButton = ({ isHomepage }: Props) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  useEffect(() => {
    noScroll(isShowMobileMenu);
  }, [isShowMobileMenu]);

  return (
    <>
      <div className={css.burgerButtonContainer}>
        <button
          type="button"
          className={css.button}
          onClick={() => setIsShowMobileMenu((prev) => !prev)}
        >
          <Icon
            id="icon-burger-menu"
            className={isHomepage ? css.iconHomepage : css.iconDefault}
            width={32}
            height={32}
          />
        </button>
      </div>

      {isShowMobileMenu && (
        <MobileMenu
          setIsShowMobileMenu={setIsShowMobileMenu}
          isHomepage={isHomepage}
        />
      )}
    </>
  );
};

export default BurgerButton;
