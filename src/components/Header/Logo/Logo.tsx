import { Link } from "react-router-dom";
import { Icon } from "../../../shared/Icon";
import css from "./Logo.module.css";

interface Props {
  isHomepage: boolean;
}

const Logo = ({ isHomepage }: Props) => {
  const iconId = isHomepage ? "icon-logo-white" : "icon-logo-header";

  return (
    <div className={css.logoContainer}>
      <Link to="/home">
        <Icon id={iconId} />
      </Link>
    </div>
  );
};

export default Logo;
