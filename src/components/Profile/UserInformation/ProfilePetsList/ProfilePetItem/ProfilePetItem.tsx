import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../../../redux/store";
import type { PetType } from "../../../../../types";
import PetInfo from "../ProfilePetInfo/ProfilePetInfo";
import { removePet } from "../../../../../redux/auth/authOperations";
import sprite from "../../../../../assets/icons/icons.svg";
import css from "./ProfilePetItem.module.css";

interface ProfilePetItemProps {
  pet: PetType;
}

const ProfilePetItem = ({ pet }: ProfilePetItemProps) => {
  const { title, imgURL, _id } = pet;
  const dispatch = useDispatch<AppDispatch>();

  const handleDeletePet = () => {
    dispatch(removePet(_id));
  };

  return (
    <li className={css.itemContainer}>
      <div className={css.petImgBox}>
        <img src={imgURL} alt={title} />
      </div>
      <div className={css.content}>
        <h3>{title}</h3>
        <PetInfo pet={pet} />
      </div>
      <button
        className={css.deletePetBtn}
        type="button"
        onClick={handleDeletePet}
      >
        <svg width={16} height={16}>
          <use xlinkHref={`${sprite}#icon-trash`}></use>
        </svg>
      </button>
    </li>
  );
};

export default ProfilePetItem;
