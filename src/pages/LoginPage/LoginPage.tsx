import LoginImage from "../../components/Login/LoginImage/LoginImage";
import LoginForm from "../../components/Login/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

const Login = () => {
  return (
    <section className={css.loginPageSection}>
      <div className={css.desktopWrapper}>
        <LoginImage />
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
