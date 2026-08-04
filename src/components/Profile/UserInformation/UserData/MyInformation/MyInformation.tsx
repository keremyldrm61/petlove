import { useAuth } from "../../../../../hooks/useAuth";
import css from "./MyInformation.module.css";

const MyInformation = () => {
  const { user } = useAuth();

  return (
    <div className={css.myInfoContainer}>
      <h1>My information</h1>
      <ul className={css.infoList}>
        <li
          className={css.infoItem}
          style={{
            borderColor: user?.name ? "var(--accent-color)" : undefined,
          }}
        >
          <p className={css.infoText}>{user?.name}</p>
        </li>
        <li
          className={css.infoItem}
          style={{
            borderColor: user?.email ? "var(--accent-color)" : undefined,
          }}
        >
          <p className={css.infoText}>{user?.email}</p>
        </li>
        <li
          className={css.infoItem}
          style={{
            borderColor: user?.phone ? "var(--accent-color)" : undefined,
          }}
        >
          <p className={css.infoText}>{user?.phone || "+380"}</p>
        </li>
      </ul>
    </div>
  );
};

export default MyInformation;
