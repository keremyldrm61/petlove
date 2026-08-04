import { Icon } from "../../../../shared/Icon";
import css from "./PetAvatar.module.css";

interface PetAvatarProps {
  petImageURL: string;
}

const PetAvatar = ({ petImageURL }: PetAvatarProps) => {
  return (
    <div className={css.avatarContainer}>
      <div className={css.imageBox}>
        {petImageURL !== "" ? (
          <img src={petImageURL} alt="Pet's avatar" />
        ) : (
          <Icon id="icon-footprint" width={34} height={34} />
        )}
      </div>
    </div>
  );
};

export default PetAvatar;
