import { useAuth } from "../../../../hooks/useAuth";
import type { PetType } from "../../../../types";
import ProfilePetItem from "./ProfilePetItem/ProfilePetItem";
import css from "./ProfilePetsList.module.css";

const ProfilePetsList = () => {
  // Hook'tan dönen pets dizisini tipliyoruz
  const { pets } = useAuth() as { pets: PetType[] };

  return (
    <ul className={css.listOfPets}>
      {pets.map((pet) => (
        <ProfilePetItem key={pet._id} pet={pet} />
      ))}
    </ul>
  );
};

export default ProfilePetsList;
