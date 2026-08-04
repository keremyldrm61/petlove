import css from "./Title.module.css";

const Title = () => {
  return (
    <h1 className={css.mainTitle}>
      Add my pet / <span>Personal details</span>
    </h1>
  );
};

export default Title;
