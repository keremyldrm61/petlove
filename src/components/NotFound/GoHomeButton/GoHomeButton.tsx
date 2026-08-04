import { Link } from "react-router-dom";
import styles from "./GoHomeButton.module.css";

const GoHomeButton = () => {
  return (
    <div className={styles.linkBox}>
      <Link to="/home" className={styles.styledLink}>
        To home page
      </Link>
    </div>
  );
};

export default GoHomeButton;
