import { useAuth } from "../../hooks/useAuth";
import { Icon } from "../../shared/Icon";
import { Link } from "react-router-dom";
import css from "./UserProfileButton.module.css";

interface Props {
  isHomepage: boolean;
}

const UserProfileButton = ({ isHomepage }: Props) => {
  const { user } = useAuth();

  return (
    <>
      <Link to="/profile" className={css.userLinkBtn}>
        {user?.avatar ? (
          <img src={user.avatar} alt={`Avatar of ${user.name}`} />
        ) : (
          <Icon id="icon-user" width={20} height={20} />
        )}
      </Link>
      {/* İsim mobilde gizli, CSS ile yönetiliyor */}
      <p
        className={`${css.userName} ${isHomepage ? css.userNameHomepage : ""}`}
      >
        {user?.name}
      </p>
    </>
  );
};

export default UserProfileButton;
