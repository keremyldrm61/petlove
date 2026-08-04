import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../../../redux/store";
import type { PetType } from "../../../../../types";
import ProfilePetInfo from "../ProfilePetInfo/ProfilePetInfo";
import { removePet } from "../../../../../redux/auth/authOperations";
import { Icon } from "../../../../../shared/Icon";
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
        <ProfilePetInfo pet={pet} />
      </div>
      <button
        className={css.deletePetBtn}
        type="button"
        onClick={handleDeletePet}
      >
        <Icon id="icon-trash" width={16} height={16} />
      </button>
    </li>
  );
};

export default ProfilePetItem;
