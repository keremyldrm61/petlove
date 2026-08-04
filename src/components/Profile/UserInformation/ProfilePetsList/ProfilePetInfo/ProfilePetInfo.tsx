import type { PetType } from "../../../../../types";
import { formatBirthday } from "../../../../../utils/helpers";
import css from "./ProfilePetInfo.module.css";

interface ProfilePetInfoProps {
  pet: PetType;
}

const ProfilePetInfo = ({ pet }: ProfilePetInfoProps) => {
  const { name, birthday, sex, species } = pet;
  const formattedDate = formatBirthday(birthday);

  const details = [
    { label: "Name", value: name },
    { label: "Birthday", value: formattedDate },
    { label: "Sex", value: sex },
    { label: "Species", value: species },
  ];

  return (
    <ul className={css.listInfoPet}>
      {details.map(({ label, value }) => (
        <li key={label} className={css.infoItem}>
          <p className={css.infoLabel}>
            {label} <span className={css.infoValue}>{value}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ProfilePetInfo;
