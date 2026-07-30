import LoginImage from "../../components/Login/LoginImage/LoginImage";
import LoginForm from "../../components/Login/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <section className={css.loginPageSection}>
      <div className={css.desktopWrapper}>
        <LoginImage />
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
