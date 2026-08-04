import { useLocation, NavLink } from "react-router-dom";
import css from "./LinksCollections.module.css";

const LinksCollections = () => {
  const location = useLocation();

  return (
    <div className={css.navContainer}>
      <NavLink
        to="favorites"
        className={({ isActive }) =>
          isActive || location.pathname === "/profile"
            ? `${css.link} ${css.active}`
            : css.link
        }
      >
        My favorite pets
      </NavLink>
      <NavLink
        to="viewed"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
      >
        Viewed
      </NavLink>
    </div>
  );
};

export default LinksCollections;
