import RegistrationImage from "../../components/Registration/RegistrationImage/RegistrationImage";
import RegistrationForm from "../../components/Registration/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <section className={css.registrationPageSection}>
      <div className={css.desktopWrapper}>
        <RegistrationImage />
        <RegistrationForm />
      </div>
    </section>
  );
};

export default RegistrationPage;
