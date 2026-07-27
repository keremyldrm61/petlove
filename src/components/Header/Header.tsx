import { useAppSelector } from "../../redux/hooks";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";
import css from "./Header.module.css";

const Header = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <header className={css.header}>
      <div className={`container ${css.container}`}>
        <Logo />
        <Nav />

        <div className={css.actions}>
          {isLoggedIn ? <UserNav /> : <AuthNav />}
        </div>
      </div>
    </header>
  );
};

export default Header;
