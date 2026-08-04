import { useAuth } from "../../../../hooks/useAuth";
import { Icon } from "../../../../shared/Icon";
import css from "./UserData.module.css";

interface UserDataProps {
  setShowEditForm: (show: boolean) => void;
}

const UserData = ({ setShowEditForm }: UserDataProps) => {
  const { user } = useAuth();

  return (
    <div className={css.containerBox}>
      <div className={css.avatarBox}>
        {user?.avatar ? (
          <img src={user.avatar} alt={`Avatar of ${user.name}`} />
        ) : (
          <Icon id="icon-user" width={40} height={40} />
        )}
      </div>
      {!user?.avatar && (
        <button
          className={css.uploadPhotoButton}
          type="button"
          onClick={() => setShowEditForm(true)}
        >
          Upload photo
        </button>
      )}
    </div>
  );
};

export default UserData;
