import { NavLink } from "react-router-dom";
import { linksData } from "../../../utils/constants";
import clsx from "clsx";
import css from "./NavMenuMobile.module.css";

interface Props {
  isHomepage: boolean;
  setIsShowMobileMenu: (val: boolean) => void;
}

const NavMenuMobile = ({ isHomepage, setIsShowMobileMenu }: Props) => {
  return (
    <ul className={css.navMenuList}>
      {linksData.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          onClick={() => setIsShowMobileMenu(false)}
          className={({ isActive }) =>
            clsx(css.navLink, {
              [css.linkHomepage]: isHomepage,
              [css.linkDefault]: !isHomepage,
              [css.activeHomepage]: isActive && isHomepage,
              [css.activeDefault]: isActive && !isHomepage,
            })
          }
        >
          {label}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavMenuMobile;
