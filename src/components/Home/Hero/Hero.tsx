import css from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={css.heroContainer}>
      <h1 className={css.title}>
        Take good <strong className={css.highlight}>care</strong> of your small
        pets
      </h1>
      <p className={css.description}>
        Choosing a pet for your home is a choice that is meant to enrich your
        life with immeasurable joy and tenderness.
      </p>
    </div>
  );
};

export default Hero;
