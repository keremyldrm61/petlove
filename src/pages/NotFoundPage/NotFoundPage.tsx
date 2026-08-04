import NotFoundCat from "../../components/NotFound/NotFoundCat/NotFoundCat";
import GoHomeButton from "../../components/NotFound/GoHomeButton/GoHomeButton";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <NotFoundCat />
        <p className={css.text}>Ooops! This page not found :(</p>
        <GoHomeButton />
      </div>
    </section>
  );
};

export default NotFoundPage;
