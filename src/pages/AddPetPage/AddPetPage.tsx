import ImageDog from "../../components/AddPet/ImageDog/ImageDog";
import Title from "../../components/AddPet/Title/Title";
import CreationForm from "../../components/AddPet/CreationForm/CreationForm";
import css from "./AddPetPage.module.css";

const AddPetPage = () => {
  return (
    <section className={css.addPetPageSection}>
      <div className={css.desktopBox}>
        <ImageDog />
        <div className={css.containerCreation}>
          <Title />
          <CreationForm />
        </div>
      </div>
    </section>
  );
};

export default AddPetPage;
