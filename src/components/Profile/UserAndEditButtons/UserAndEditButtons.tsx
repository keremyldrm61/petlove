import { Icon } from "../../../shared/Icon";
import css from "./UserAndEditButtons.module.css";

interface UserAndEditButtonsProps {
  setShowEditForm: (show: boolean) => void;
}

const UserAndEditButtons = ({ setShowEditForm }: UserAndEditButtonsProps) => {
  return (
    <div className={css.containerFlex}>
      <div className={css.userBox}>
        <div className={css.userBoxInner}>
          <p>User</p>
          <Icon id="icon-user" width={18} height={18} />
        </div>
      </div>
      <button
        className={css.editBtn}
        type="button"
        onClick={() => setShowEditForm(true)}
      >
        <Icon id="icon-pencil" width={18} height={18} />
      </button>
    </div>
  );
};

export default UserAndEditButtons;
