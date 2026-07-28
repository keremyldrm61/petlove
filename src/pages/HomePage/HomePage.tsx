import Hero from "../../components/Home/Hero/Hero";
import HeroImage from "../../components/Home/HeroImage/HeroImage";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={css.homePageSection}>
      <Hero />
      <HeroImage />
    </section>
  );
};

export default HomePage;
