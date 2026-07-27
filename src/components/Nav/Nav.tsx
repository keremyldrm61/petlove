import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Nav.module.css";

const buildLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(css.link, isActive && css.active);

const Nav = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/news" className={buildLinkClass}>
        News
      </NavLink>
      <NavLink to="/notices" className={buildLinkClass}>
        Notices
      </NavLink>
      <NavLink to="/friends" className={buildLinkClass}>
        Friends
      </NavLink>
    </nav>
  );
};

export default Nav;
