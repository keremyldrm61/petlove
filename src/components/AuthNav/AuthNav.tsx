import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink to="/login" className={css.loginBtn}>
        Log In
      </NavLink>
      <NavLink to="/register" className={css.registerBtn}>
        Registration
      </NavLink>
    </div>
  );
};

export default AuthNav;
