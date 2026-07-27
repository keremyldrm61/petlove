import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/auth/authOperations";
import css from "./UserNav.module.css";

const UserNav = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={css.userNav}>
      <button className={css.profileBtn}>Profile</button>
      <button className={css.logoutBtn} onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default UserNav;
