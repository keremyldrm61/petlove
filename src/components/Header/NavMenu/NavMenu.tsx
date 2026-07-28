import { NavLink } from "react-router-dom";
import { linksData } from "../../../utils/constants";
import clsx from "clsx";
import css from "./NavMenu.module.css";

interface Props {
  isHomepage: boolean;
}

const NavMenu = ({ isHomepage }: Props) => {
  return (
    <ul className={css.navMenuList}>
      {linksData.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            clsx(css.navLink, {
              [css.linkHomepage]: isHomepage,
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

export default NavMenu;
