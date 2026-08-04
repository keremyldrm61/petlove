import { Link } from "react-router-dom";
import { Icon } from "../../../../shared/Icon";
import css from "./MyPetsTitle.module.css";

const MyPetsTitle = () => {
  return (
    <div className={css.titlePetsContainer}>
      <h2>My pets</h2>
      <Link to="/add-pet" className={css.addPetLink}>
        Add pet <Icon id="icon-plus" width={18} height={18} />
      </Link>
    </div>
  );
};

export default MyPetsTitle;
